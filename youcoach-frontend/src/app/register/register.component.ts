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
  error: boolean;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        // tslint:disable-next-line:max-line-length
        username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
        password: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}')]],
        passwordAgain: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'passwordAgain')
      });
    this.resetError();
  }

  registerUser(): void {
    this.resetError();
    this.authenticationService.register(this.userForm.value).subscribe(() => {
        console.log('response received');
        this.goToUserProfile();
      },
      (error) => {
        console.error('error caught in component');
        this.error = true;
      });
  }

  goToUserProfile(): void {
    this.router.navigate([`myProfile`]);
  }

  resetError(): void {
    this.error = false;
  }
}
