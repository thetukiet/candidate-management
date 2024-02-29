import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { APP_CONST } from '../utils/constant';
import {HttpUtils} from "../utils/http.utils";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = environment.API_SERVER_URL +'/auth/Login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password }, {headers:  HttpUtils.getNormalHeader()}).pipe(
      tap((response) => {

        if (response?.data?.accessToken) {
          localStorage.setItem(APP_CONST.AUTH_INFO_KEY, JSON.stringify(response));
        }
      })
    );
  }
}
