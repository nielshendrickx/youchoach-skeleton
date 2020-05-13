import {Injectable} from '@angular/core';
import {AuthenticationHttpService} from './authentication.http.service';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'jwt_token';
  private usernameKey = 'username';
  private userLoggedInSource = new Subject<boolean>();
  userLoggedIn$ = this.userLoggedInSource.asObservable();

  constructor(private loginService: AuthenticationHttpService, private userService: UserService) {
  }

  login(loginData: any) {
    return this.loginService.login(loginData)
      .pipe(tap(response => {
        sessionStorage.setItem(this.tokenKey, response.headers.get('Authorization').replace('Bearer', '').trim());
        sessionStorage.setItem(this.usernameKey, this.getUserIdFromResponse(response));
        this.userLoggedInSource.next(true);
      }));
  }

  register(registerData: any) {
    return this.userService.registerUser(registerData)
      .pipe(tap(response => {
        sessionStorage.setItem(this.tokenKey, response.headers.get('Authorization').replace('Bearer', '').trim());
        sessionStorage.setItem(this.usernameKey, this.getUserIdFromResponse(response));
        this.userLoggedInSource.next(true);
      }));
  }

  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  getUserId() {
    return sessionStorage.getItem(this.usernameKey);
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.tokenKey) !== null;
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.usernameKey);
    this.userLoggedInSource.next(false);
  }

  private getUserIdFromResponse(response: any): string {
    const decoded = jwt_decode(response.headers.get('Authorization').replace('Bearer', '').trim());
    return decoded.sub;
  }

}
