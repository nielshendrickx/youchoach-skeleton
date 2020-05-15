import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';

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

  roles: string[] = ['STUDENT', 'COACH', 'ADMINISTRATOR'];

  @Input() user: User;


  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.authenticationService.getUserId();
    this.userService.getUserById(id)
      .subscribe(user => {
        this.initializeForm(user);
        this.user = user;
      });
  }

  initializeForm(user: User): void {
    this.userForm.patchValue(user);
    this.userForm.disable();
  }

  editForm() {
    this.userForm.enable();
    document.getElementById('save-button').style.visibility = 'visible';
    document.getElementById('cancel-button').style.visibility = 'visible';
    document.getElementById('edit-button').style.visibility = 'hidden';
  }

  cancel(): void {
    this.userForm.disable();
    document.getElementById('save-button').style.visibility = 'hidden';
    document.getElementById('cancel-button').style.visibility = 'hidden';
    document.getElementById('edit-button').style.visibility = 'visible';
  }

  save(): void {
    const updateUser = this.userForm.value;
    updateUser.userId = this.authenticationService.getUserId();
    updateUser.pictureUrl = this.user.pictureUrl;
    this.userService.updateUser(updateUser).subscribe(() => console.log('user is updated'));
  }
}
