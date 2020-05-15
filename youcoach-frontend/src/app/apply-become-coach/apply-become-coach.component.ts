import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-apply-become-coach',
  templateUrl: './apply-become-coach.component.html',
  styleUrls: ['./apply-become-coach.component.css']
})
export class ApplyBecomeCoachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mail() {
    location.href = 'mailto:admin@youcoach.be?subject=Apply to become a coach&body=Write your name, motivation, and topic list';
  }
}
