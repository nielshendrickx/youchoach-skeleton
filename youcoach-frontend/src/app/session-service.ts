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

   registerSession(sessionData): Observable<any> {
     return this.http.post<any>(this.RequestSessionURL, sessionData, {observe: 'response'});
   }

}
