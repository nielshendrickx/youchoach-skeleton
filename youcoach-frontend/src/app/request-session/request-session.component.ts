import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '../session-service';

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {
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
    this.sessionService.registerSession(sessionData).subscribe();
    this.requestForm.reset();
  }
}
