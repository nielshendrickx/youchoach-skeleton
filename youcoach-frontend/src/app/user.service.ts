import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from './user';
import {catchError} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {UpdateUser} from './updateUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UsersUrl = `${environment.backendUrl}/users`;
  private RegistrationUrl = `${environment.backendUrl}/register`;
  private CoachUrl = `${environment.backendUrl}/coach`;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  getUserById(id: string): Observable<User> {
    const UserUrl = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(UserUrl)
      .pipe(catchError(this.handleError('getUserById')));
  }

  /** GET: get roles of user from the server */
  getRoles(): Observable<any> {
    return this.http.get<any>(`${this.UsersUrl}/roles`)
      .pipe(catchError(this.handleError('getRoles')));
  }

  /** POST: add a new user to the server */
  registerUser(registerData): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.RegistrationUrl, registerData, {observe: 'response'})
      .pipe(catchError(this.handleError('registerUser')));
  }

  /** PUT: update the user on the server. Returns the updated user upon success. */
  updateUser(updateUser: UpdateUser): Observable<any> {
    return this.http.put(`${this.UsersUrl}`, updateUser, this.httpOptions)
      .pipe(catchError(this.handleError('updateItem')));
  }


  private handleError(operation = 'operation') {
    return (error: any) => {
      console.error(error);
      return throwError(error);
    };
  }

  /** GET: get list of all the coaches */
  getAllCoach(): Observable<any> {
    console.log('get coaches');
    return this.http.get(this.CoachUrl);
  }
}
