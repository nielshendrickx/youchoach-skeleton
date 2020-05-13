import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {UserService} from '../user.service';
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    // tslint:disable-next-line:max-line-length
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}')]),
      passwordAgain: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}')]),
    });
  error = false;

  constructor(
    private userService: UserService, private authenticationService: AuthenticationService, private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.authenticationService.register(this.userForm.value).subscribe(resp => {
        this.goToUserProfile(this.authenticationService.getUserId());
      },
      error => {
        this.error = true;
      });
  }

  goToUserProfile(userId: string): void {
    this.router.navigate([`users/${userId}`]);
  }
}
