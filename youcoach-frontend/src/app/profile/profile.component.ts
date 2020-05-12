import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    // todo: make id flexible
    const id = '96645fe8-32ba-46c4-8726-9dd6f5a52827';
    // const id = this.authenticationService.getUsername();
    this.userService.getUserById(String(id))
      .subscribe(user => this.user = user);
  }
}
