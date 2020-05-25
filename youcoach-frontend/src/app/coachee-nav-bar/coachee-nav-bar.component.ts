import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-coachee-nav-bar',
  templateUrl: './coachee-nav-bar.component.html',
  styleUrls: ['./coachee-nav-bar.component.css']
})
export class CoacheeNavBarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.hideMyCoachProfileButtonWhenStudent();
  }

  hideMyCoachProfileButtonWhenStudent(): void {
    if (this.authenticationService.getRoles().some(role => role.authority === 'COACHEE')) {
      document.getElementById('my-coach-profile-button').style.visibility = 'hidden';
    }
  }
}
