import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '../session-service';
import {Session} from '../session';
import {Router} from '@angular/router';


@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  session: Session;

  public requestForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    remarks: new FormControl('', Validators.required)
/*  },
    {
      validator: this.checkDateValidator('date')*/
    });

  constructor(private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
/*    console.log('formdate' + this.requestForm.get('date'));
    console.log('vandaag' + new Date());*/
    const sessionData = this.requestForm.value;
    this.sessionService.registerSession(sessionData).subscribe();
    this.goToUserProfile();
  }

  goToUserProfile(): void {
    this.router.navigate([`myProfile`]);
  }

/*  checkDateValidator(controlName) {
    const dayToday = new Date();
    const givenDay = this.requestForm.get('date');
    if (dayToday < givenDay)

  }*/

}
