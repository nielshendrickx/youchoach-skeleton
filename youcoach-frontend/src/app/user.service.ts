import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
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
  registerUser(registerData): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.RegistrationUrl, registerData, {observe: 'response'})
      .pipe(catchError(this.handleError<any>('registerUser')));
  }

  /** PUT: update the user on the server. Returns the updated user upon success. */
  updateUser(updateUser: UpdateUser): Observable<any> {
    return this.http.put(`${this.UsersUrl}`, updateUser, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateItem')));
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
