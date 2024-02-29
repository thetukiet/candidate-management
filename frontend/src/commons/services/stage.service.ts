import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../models/stage.model';
import { environment }  from '../../environments/environment';
import {HttpUtils} from "../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = environment.API_SERVER_URL +'/Stage/GetAll';

  constructor(private http: HttpClient) {}

  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl, {headers: HttpUtils.getAuthHeader()});
  }
}
