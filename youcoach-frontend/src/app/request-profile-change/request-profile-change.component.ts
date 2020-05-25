import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-profile-change',
  templateUrl: './request-profile-change.component.html',
  styleUrls: ['./request-profile-change.component.css']
})
export class RequestProfileChangeComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.setBackgroundColor();
  }

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#009688';
    }
    document.getElementById('footer').style.backgroundColor = '#009688';
  }

  mail(mailRef: string) {
    this.translateService.get(mailRef).subscribe((text: string) => {
      location.href = text;
    });
  }

  goToCoachProfile(): void {
    this.router.navigate(['/mycoachprofile']);
  }
}
