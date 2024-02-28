import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { APP_CONST } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = environment.API_SERVER_URL +'/auth/Login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password }, {headers:  this.getHeader()}).pipe(
      tap((response) => {

        if (response?.data?.accessToken) {
          localStorage.setItem(APP_CONST.AUTH_INFO_KEY, JSON.stringify(response));
        }
      })
    );
  }

  getHeader() {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}