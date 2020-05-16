import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userId;
  language = 'en';

  constructor(private authenticationService: AuthenticationService, public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.userId = this.authenticationService.getUserId();
    this.authenticationService.userLoggedIn$.subscribe(_ => {
      this.userId = this.authenticationService.getUserId();
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }

  currentLanguage() {
    return this.language;
  }
}
