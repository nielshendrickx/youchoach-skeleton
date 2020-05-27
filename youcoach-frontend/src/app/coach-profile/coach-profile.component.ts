import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    role: new FormControl(''),
    pictureUrl: new FormControl(''),
    introduction: new FormControl(''),
    availability: new FormControl(''),
    topics: new FormControl(''),
  });

  user: User;
  profileInfoIsEditable: boolean;
  isAdmin = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.setBackgroundColor();
    this.verifyIfUserIsAnAdmin();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getCoachById(id)
      .subscribe(user => {
        this.initializeForm(user);
        this.user = user;
      });
  }

  verifyIfUserIsAnAdmin(): void {
    const id = this.authenticationService.getUserId();
    this.userService.getUserById(id)
      .subscribe(user => {
        if (user.role === 'ADMINISTRATOR') {
          this.isAdmin = true;
        }
      });
  }

  initializeForm(user: User): void {
    this.userForm.patchValue(user);
    this.profileInfoIsEditable = false;
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


  editTopics() {

  }
}
