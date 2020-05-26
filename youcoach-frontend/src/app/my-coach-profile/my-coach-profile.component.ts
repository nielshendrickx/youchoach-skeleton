import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {Topic} from '../topic';
import {Grade} from '../grade';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    role: new FormControl(''),
    pictureUrl: new FormControl(''),
    introduction: new FormControl(''),
    availability: new FormControl('')
  });

  topicsForm = new FormGroup({
    topic1: new FormControl(''),
    topic2: new FormControl(''),
    grades1: new FormControl('')
  });

  gradesList: Grade[];

  user: User;
  isAdmin = false;
  topicEditMode = false;
  topicList: string[] = ['physics', 'sports', 'maths', 'french'];
  filteredTopicList1: Observable<string[]>;
  filteredTopicList2: Observable<string[]>;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.setBackgroundColor();
    // this.getTopicsList();
    this.filterTopicList1();
    this.filterTopicList2();
  }

  getUser(): void {
    const id = this.authenticationService.getUserId();
    this.userService.getUserById(id)
      .subscribe(user => {
        this.initializeForm(user);
        this.user = user;
        if (user.role === 'ADMINISTRATOR') {
          this.isAdmin = true;
        }
      });
  }

  getTopicsList(): void {
// todo: implement this so that a list of unique topics is fetched from the database
  }

  initializeForm(user: User): void {
    this.userForm.patchValue(user);
    this.userForm.disable();
    this.gradesList = [{year: 1}, {year: 2}, {year: 3}, {year: 4}, {year: 5}, {year: 6}, {year: 7}];
    this.topicsForm.controls.topic1.setValue(user.topics[0].name);
    this.topicsForm.controls.topic2.setValue(user.topics[1].name);
    this.topicsForm.controls.grades1.setValue(user.topics[0].grade);
    console.log(user.topics[0].grade);
    console.log(this.gradesList);
    this.topicsForm.disable();
  }

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#009688';
    }
    document.getElementById('footer').style.backgroundColor = '#009688';
  }

  editCoachInformation() {
    this.userForm.get('introduction').enable();
    this.userForm.get('availability').enable();
    document.getElementById('save-button').style.visibility = 'visible';
    document.getElementById('cancel-button').style.visibility = 'visible';
    document.getElementById('edit-button').style.visibility = 'hidden';
  }

  cancelCoachInformation(): void {
    this.initializeForm(this.user);
    document.getElementById('save-button').style.visibility = 'hidden';
    document.getElementById('cancel-button').style.visibility = 'hidden';
    document.getElementById('edit-button').style.visibility = 'visible';
  }

  saveCoachInformation(): void {
    this.userForm.disable();
    const updateUser = this.userForm.value;
    updateUser.introduction = this.userForm.get('introduction').value;
    updateUser.availability = this.userForm.get('availability').value;
    updateUser.userId = this.authenticationService.getUserId();
    updateUser.topics = this.user.topics;
    this.userService.updateUser(updateUser).subscribe((response) => {
        this.user = response;
        this.cancelCoachInformation();
      },
      () => {
        console.error('error caught in component');
      });
  }

  goToRequestProfileChange(): void {
    this.router.navigate(['/requestProfileChange']);
  }

  editTopics() {
    this.topicsForm.get('topic1').enable();
    this.topicsForm.get('topic2').enable();
    this.topicsForm.get('grades1').enable();
    this.topicEditMode = true;
    document.getElementById('topics-save-button').style.visibility = 'visible';
    document.getElementById('topics-cancel-button').style.visibility = 'visible';
    document.getElementById('topics-edit-button').style.visibility = 'hidden';
  }

  filterTopicList1(): void {
    this.filteredTopicList1 = this.topicsForm.get('topic1').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  filterTopicList2(): void {
    this.filteredTopicList2 = this.topicsForm.get('topic2').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.topicList.filter(option => option.toLowerCase().includes(filterValue));
  }

  saveCoachTopics() {
    console.log("values of topics" + this.topicsForm.get('grades1').value);
    this.topicsForm.disable();
    const updateUser = this.userForm.value;
    updateUser.introduction = this.user.introduction;
    updateUser.availability = this.user.availability;
    const gradestopic1: Grade[] = [
      {year: 1},
      {year: 2},
      {year: 3}
    ];
    const gradestopic2: Grade[] = [
      {year: 1},
      {year: 2},
      {year: 3}
    ];

    const topic1Update: Topic = {
      grade: gradestopic1,
      name: this.topicsForm.get('topic1').value
    };
    const topic2Update: Topic = {
      grade: gradestopic2,
      name: this.topicsForm.get('topic2').value
    };
    updateUser.topics = [
      topic1Update,
      topic2Update
    ];
    updateUser.userId = this.authenticationService.getUserId();
    this.userService.updateUser(updateUser).subscribe((response) => {
        this.user = response;
        this.cancelCoachTopics();
      },
      () => {
        console.error('error caught in component');
      });
  }

  cancelCoachTopics() {
    this.initializeForm(this.user);
    this.topicEditMode = false;
    document.getElementById('topics-save-button').style.visibility = 'hidden';
    document.getElementById('topics-cancel-button').style.visibility = 'hidden';
    document.getElementById('topics-edit-button').style.visibility = 'visible';
  }
}
