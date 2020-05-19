import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-apply-become-coach',
  templateUrl: './apply-become-coach.component.html',
  styleUrls: ['./apply-become-coach.component.css']
})
export class ApplyBecomeCoachComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  mail(mailRef: string) {
    this.translateService.get(mailRef).subscribe((text: string) => {
      /*location.href = text; */
      location.href = 'mailto:admin@youcoach.be?subject=Apply to become a coach&body=Write your name, motivation, and topic list';
    });
  }

  goToApplyBecomeCoach(): void {
    this.router.navigate(['/applyBecomeCoach']);
  }

  goToMyProfile(): void {
    this.router.navigate(['/myProfile']);
  }
}
