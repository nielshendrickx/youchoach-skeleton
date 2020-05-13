import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username;
  language = 'en';
  loggedIn$;

  constructor(private authenticationService: AuthenticationService, public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.username = this.authenticationService.getUserId();
    this.authenticationService.userLoggedIn$.subscribe(_ => {
      this.username = this.authenticationService.getUserId();
    });
    this.loggedIn$ = this.authenticationService.userLoggedIn$;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }
  currentLanguage() {
    return this.language;
  }
}
