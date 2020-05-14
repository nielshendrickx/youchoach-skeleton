import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coachee-nav-bar',
  templateUrl: './coachee-nav-bar.component.html',
  styleUrls: ['./coachee-nav-bar.component.css']
})
export class CoacheeNavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToApplyBecomeCoach(): void {
    this.router.navigate(['/applyBecomeCoach']);
  }

  goToMyProfile(): void {
    this.router.navigate(['/myProfile']);
  }
}
