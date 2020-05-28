import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  error: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.resetError();
    this.setBackgroundColor();
  }

  resetPassword(): void {
    this.error = false;
    window.alert('contact admin');
  }

  signIn(): void {
    this.resetError();
    this.authenticationService.login(this.signInForm.value)
      .subscribe(() => {
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

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#ffc107';
    }
    document.getElementById('footer').style.backgroundColor = '#ffc107';
  }
}
