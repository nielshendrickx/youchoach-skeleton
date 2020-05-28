import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private RequestSessionURL = `${environment.backendUrl}/request-session`;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) {
  }

   /** POST: request a new session to server */
   registerSession(sessionData): Observable<any> {
     console.log('serv');
     console.log(sessionData);
     return this.http.post<any>(this.RequestSessionURL, sessionData, {observe: 'response'});
   }

}
