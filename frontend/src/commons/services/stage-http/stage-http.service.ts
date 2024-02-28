import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { APP_CONST } from '../../../constants';
import { environment }  from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Stage } from '../../models/stage.model';

@Injectable({
  providedIn: 'root',
})
export class StageHttpService {
  constructor(private httpClient: HttpClient) {}

  async getStageData() {
    //return this.httpClient.get<{ data: any }>('assets/data.json');

    return await this.getMethod(environment.API_SERVER_URL +'/Stage/GetAll',{});

  }


  async postLogin(email:string, pass: string) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    };
    return await this.httpClient.post(environment.API_SERVER_URL +'/auth/Login', {userName: email, password: pass}, { headers }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {

          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );

  }

  async getMethod(url: string, params: any) {
    let userLogin = JSON.parse(localStorage.getItem(APP_CONST.AUTH_INFO_KEY) as string);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Authorization', 'Bearer ' + userLogin.data.accessToken);

    return await this.httpClient.get<Stage[]>(url, { params: params, responseType: 'json', headers })
    .pipe(
      map(response => {
        return response.map(user => ({

        }));
      })
    );
  }

  async postPublicUrl(requestURL: any, body: any) {
    let userLogin = JSON.parse(localStorage.getItem(APP_CONST.AUTH_INFO_KEY) as string);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers = headers.append('Authorization', 'Bearer ' + userLogin.data.accessToken);

    return await this.httpClient.post(requestURL, body, { headers }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  }

  async postMethod(url: string, body: any, params: any) {
    return await this.httpClient.post(url, body, { params: params, responseType: 'text' as 'json' }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  }

  async putMethod(url: string, body: any, params: any) {
    return await this.httpClient.put(url, body, { params: params, responseType: 'text' as 'json' }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  }

  async deleteMethod(url: string, params: any) {
    return await this.httpClient.delete(url, { params: params, responseType: 'text' as 'json' }).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )).toPromise().then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      ).then(
        data => {
          // console.log("Request is successful ", data);
          return data;
        },
        error => {
          // console.log("Error", error);
          return { error: [{ message: APP_CONST.SERVER_ERROR }] };
        }
      );
  }
}
