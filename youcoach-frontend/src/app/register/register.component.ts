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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  registerUser(): void{

  }

}
