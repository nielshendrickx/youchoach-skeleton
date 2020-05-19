import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userId;

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.userId = this.authenticationService.getUserId();
    this.authenticationService.userLoggedIn$.subscribe(_ => {
      this.userId = this.authenticationService.getUserId();
    });
  }
}
