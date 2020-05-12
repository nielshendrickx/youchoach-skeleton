import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private url = `${environment.backendUrl}/users`;

  userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}')]),
      passwordAgain: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}')]),
    });

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.userService.registerUser(this.userForm.value).subscribe();
  }
}
