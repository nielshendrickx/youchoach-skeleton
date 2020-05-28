import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)], ),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    // tslint:disable-next-line:max-line-length
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
    role: new FormControl(''),
    pictureUrl: new FormControl(''),
  });

  roles: string[];
  error: boolean;
  errorMessage: string;
  user: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.getRoles();
    this.resetError();
    this.setBackgroundColor();
    this.hideApplyBecomeCoachButtonWhenCoach();
  }

  getUser(): void {
    const id = this.authenticationService.getUserId();
    this.userService.getUserById(id)
      .subscribe(user => {
        this.initializeForm(user);
        this.user = user;
      });
  }

  getRoles(): void {
    this.userService.getRoles().subscribe(roles => this.roles = roles);
  }

  initializeForm(user: User): void {
    this.userForm.patchValue(user);
    this.userForm.disable();
  }

  editForm() {
    if (this.authenticationService.getRoles().some(role => role.authority === 'ADMINISTRATOR')) {
      this.userForm.enable();
    }
    this.userForm.get('firstName').enable();
    this.userForm.get('lastName').enable();
    this.userForm.get('username').enable();
    this.userForm.get('pictureUrl').enable();
    document.getElementById('save-button').style.visibility = 'visible';
    document.getElementById('cancel-button').style.visibility = 'visible';
    document.getElementById('edit-button').style.visibility = 'hidden';
  }

  cancel(): void {
    this.resetError();
    this.userForm.disable();
    document.getElementById('save-button').style.visibility = 'hidden';
    document.getElementById('cancel-button').style.visibility = 'hidden';
    document.getElementById('edit-button').style.visibility = 'visible';
    this.initializeForm(this.user);
  }

  save(): void {
    this.resetError();
    const updateUser = this.userForm.value;
    updateUser.role = this.userForm.get('role').value;
    updateUser.userId = this.authenticationService.getUserId();
    updateUser.topics = this.user.topics;
    this.userService.updateUser(updateUser).subscribe((response) => {
        this.user = response;
        this.cancel();
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error.error.message;
        this.error = true;
      });
  }

  resetError(): void {
    this.errorMessage = '';
    this.error = false;
  }

  goToApplyBecomeCoach(): void {
    this.router.navigate(['/applyBecomeCoach']);
  }

  goToMyProfile(): void {
    this.router.navigate(['/myProfile']);
  }

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#ffc107';
    }
    document.getElementById('footer').style.backgroundColor = '#ffc107';
  }
  hideApplyBecomeCoachButtonWhenCoach(): void {
    if (this.authenticationService.getRoles().some(role => role.authority === 'COACH')) {
      document.getElementById('apply-become-coach-button').style.display = 'none';
    }
  }
}
