import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn$;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.loggedIn$ = this.authenticationService.userLoggedIn$;
  }

  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  signOut(): void {
    this.authenticationService.logout();
    this.goToHomePage();
  }

  goToHomePage(): void {
    this.router.navigate(['/']);
  }

  isLoggedIn(): void {
    console.log(this.authenticationService.isLoggedIn());
    console.log(this.loggedIn$);
  }
}


