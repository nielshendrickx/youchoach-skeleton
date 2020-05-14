import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coachee-left-nav-bar',
  templateUrl: './coachee-left-nav-bar.component.html',
  styleUrls: ['./coachee-left-nav-bar.component.css']
})
export class CoacheeLeftNavBarComponent implements OnInit {

  constructor() { }
  private router: Router;
  ngOnInit(): void {
  }

  goToApplyBecomeCoach(): void {
    this.router.navigate(['/applyBecomeCoach']);
  }

  goToMyProfile(): void {
    this.router.navigate(['/myProfile']);
  }

}
