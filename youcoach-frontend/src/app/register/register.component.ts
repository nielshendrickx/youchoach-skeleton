import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {MustMatch} from '../must-match.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  error = false;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        // tslint:disable-next-line:max-line-length
        username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
        password: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}')]],
        passwordAgain: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'passwordAgain')
      });
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
