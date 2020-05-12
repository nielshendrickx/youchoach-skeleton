import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private UsersUrl = `${environment.backendUrl}/users`;

  getUserById(id: string): Observable<User> {
    const UserUrl = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(UserUrl);
  }
}
