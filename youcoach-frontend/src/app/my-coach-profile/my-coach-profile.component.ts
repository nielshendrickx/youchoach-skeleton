import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    role: new FormControl(''),
    pictureUrl: new FormControl(''),
    introduction: new FormControl(''),
    availability: new FormControl('')
  });

  user: User;
  isAdmin = false;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.setBackgroundColor();
  }

  getUser(): void {
    const id = this.authenticationService.getUserId();
    this.userService.getUserById(id)
      .subscribe(user => {
        this.initializeForm(user);
        this.user = user;
        if (user.role === 'ADMINISTRATOR') {
          this.isAdmin = true;
        }
      });
  }

  initializeForm(user: User): void {
    this.userForm.patchValue(user);
    this.userForm.disable();
  }

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#009688';
    }
    document.getElementById('footer').style.backgroundColor = '#009688';
  }

  editCoachInformation() {
    this.userForm.get('introduction').enable();
    this.userForm.get('availability').enable();
    document.getElementById('save-button').style.visibility = 'visible';
    document.getElementById('cancel-button').style.visibility = 'visible';
    document.getElementById('edit-button').style.visibility = 'hidden';
  }

  cancelCoachInformation(): void {
    this.initializeForm(this.user);
    document.getElementById('save-button').style.visibility = 'hidden';
    document.getElementById('cancel-button').style.visibility = 'hidden';
    document.getElementById('edit-button').style.visibility = 'visible';
  }

  saveCoachInformation(): void {
    this.userForm.disable();
    const updateUser = this.userForm.value;
    updateUser.introduction = this.userForm.get('introduction').value;
    updateUser.availability = this.userForm.get('availability').value;
    updateUser.userId = this.authenticationService.getUserId();
    console.log(updateUser);
    this.userService.updateUser(updateUser).subscribe((response) => {
        console.log('response received');
        this.user = response;
        this.cancelCoachInformation();
      },
      () => {
        console.error('error caught in component');
      });
  }

  goToRequestProfileChange(): void {
    this.router.navigate(['/requestProfileChange']);
  }

  editTopics() {

  }
}
