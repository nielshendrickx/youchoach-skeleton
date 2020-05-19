import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userId;
  language = 'en';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.userId = this.authenticationService.getUserId();
    this.authenticationService.userLoggedIn$.subscribe(_ => {
      this.userId = this.authenticationService.getUserId();
    });
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

  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }

  currentLanguage() {
    return this.language;
  }
}


