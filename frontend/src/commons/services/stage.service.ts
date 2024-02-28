import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../models/stage.model';
import { environment }  from '../../environments/environment';
import { Candidate } from '../models/candidate.model';
import { APP_CONST } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = environment.API_SERVER_URL +'/Stage/GetAll';

  constructor(private http: HttpClient) {}

  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl, {headers: this.getHeader()});
  }

  getHeader() {
    let userLogin = JSON.parse(localStorage.getItem(APP_CONST.AUTH_INFO_KEY) as string);

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Authorization', 'Bearer ' + userLogin.data.accessToken);
    return headers;
  }
}