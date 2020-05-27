import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-find-acoach',
  templateUrl: './find-acoach.component.html',
  styleUrls: ['./find-acoach.component.css']
})
export class FindACoachComponent implements OnInit {
  CoachList: User[];
  topics = new FormControl();
  topicList = [];
  years = new FormControl();
  yearList = [];
  searchText: string;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.setBackgroundColor();
    this.getListOfAllCoaches();

  }

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#ffc107';
    }
    document.getElementById('footer').style.backgroundColor = '#ffc107';
  }

  getListOfAllCoaches() {
    this.userService.getAllCoach()
      .subscribe(coaches => {
        this.CoachList = coaches;
        this.getAllTopicsOfCoaches(coaches);
        this.getAllYears(coaches);
      });
  }

  getAllTopicsOfCoaches(coaches: User[]): void {
    const topicNamesOfCoaches = [];
    coaches
      .filter(coach => coach.topics.length !== 0)
      .map(coach => coach.topics)
      .map(o => o.forEach(topic => topicNamesOfCoaches.push(topic.name)));
    this.topicList = [...new Set(topicNamesOfCoaches)].sort();
  }

  getAllYears(coaches: User[]): void {
    const years = [];
    coaches
      .filter(coach => coach.topics.length !== 0)
      .map(coach => coach.topics)
      .map(o => o.forEach(topic => topic.grade.forEach(grade => years.push(grade.year))));
    this.yearList = [...new Set(years)].sort();
  }
}
