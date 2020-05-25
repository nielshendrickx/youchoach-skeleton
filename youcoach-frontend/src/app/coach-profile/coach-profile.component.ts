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

  isAdmin = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
  }

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
  editable: boolean;

  ngOnInit(): void {
    this.getUser();
    this.setBackgroundColor();
  }

  getUser(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => {
        if (user.role === 'COACHEE') {
          this.router.navigate(['/myProfile']);
        }
        this.initializeForm(user);
        this.user = user;
        if (user.role === 'ADMINISTRATOR') {
          this.isAdmin = true;
        }
      });
  }

  initializeForm(user: User): void {
    this.userForm.patchValue(user);
    this.editable = false;
  }

  setBackgroundColor(): void {
    if (document.getElementById('coachee-nav-bar') !== null) {
      document.getElementById('coachee-nav-bar').style.backgroundColor = '#009688';
    }
    document.getElementById('footer').style.backgroundColor = '#009688';
  }

  editTopics() {

  }
}
