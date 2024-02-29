import { HttpHeaders } from '@angular/common/http';
import {APP_CONST} from "./constant";

export class HttpUtils {

  static getAuthHeader() {
    const userLogin = JSON.parse(localStorage.getItem(APP_CONST.AUTH_INFO_KEY) as string);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Authorization', 'Bearer ' + userLogin.data.accessToken);
    return headers;
  }

  static getNormalHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}
