import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-find-acoach',
  templateUrl: './find-acoach.component.html',
  styleUrls: ['./find-acoach.component.css']
})
export class FindACoachComponent implements OnInit {
  CoachList: User[];

  constructor(
    private userService: UserService
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
      .subscribe(coaches => this.CoachList = coaches);
  }

}
