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
