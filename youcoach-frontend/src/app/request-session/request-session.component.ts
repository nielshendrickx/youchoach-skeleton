import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    subject: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    location: new FormControl(''),
    remarks: new FormControl('')
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

}
