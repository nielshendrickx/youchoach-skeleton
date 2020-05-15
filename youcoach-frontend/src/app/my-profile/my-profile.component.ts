import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../user';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
  }
  @Input() user: User;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.authenticationService.getUserId();
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }

}
