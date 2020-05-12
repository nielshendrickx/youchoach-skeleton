import { Injectable } from '@angular/core';
import {UserComponent} from './user/user.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private UsersUrl = '/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl);
  }

  getUserById(id: string): Observable<User> {
    const UserUrl = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(UserUrl);
  }

}
