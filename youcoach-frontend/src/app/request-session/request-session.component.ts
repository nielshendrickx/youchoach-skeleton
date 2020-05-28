import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '../session-service';
import {Session} from '../session';

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  session: Session;

  public requestForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required/*, this.checkDateValidator*/),
    time: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    remarks: new FormControl('', Validators.required)
  });

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const sessionData = this.requestForm.value;
    console.log(this.sessionService);
    this.sessionService.registerSession(sessionData).subscribe();
    this.requestForm.reset();

  }

/*  checkDateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if ( control.value === new Date()) {
      return {givenDate: true};
    }
    return null;
  }*/

}
