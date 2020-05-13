import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {catchError} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UsersUrl = `${environment.backendUrl}/users`;
  private RegistrationUrl = `${environment.backendUrl}/register`;
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
      .pipe(catchError(this.handleError<any>('getUserById')));
  }

  /** POST: add a new user to the server */
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.RegistrationUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>('registerUser')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
