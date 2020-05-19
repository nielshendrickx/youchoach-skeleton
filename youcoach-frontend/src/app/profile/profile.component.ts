import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {AuthenticationService} from '../authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  @Input() user: User;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }

  goToApplyBecomeCoach(): void {
    this.router.navigate(['/applyBecomeCoach']);
  }

  goToMyProfile(): void {
    this.router.navigate(['/myProfile']);
  }
}
