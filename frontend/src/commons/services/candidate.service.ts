import { TuiDialogService } from '@taiga-ui/core';
import { Injectable } from '@angular/core';
import { environment }  from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Subject} from "rxjs";
import {HttpUtils} from "../utils/http.utils";

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private changedNotifier = new Subject<object | null>();

  constructor(private dialogService: TuiDialogService, private http: HttpClient) {}
  private addNewCandidateUrl = environment.API_SERVER_URL +'/Candidate/AddNewCandidate';
  private updateCandidateUrl = environment.API_SERVER_URL +'/Candidate/UpdateCandidate/';
  private moveCandidateUrl = environment.API_SERVER_URL +'/Candidate/MoveCandidate';

  notifyUpdateSuccess(candidate : object | null) {
    this.changedNotifier.next(null);
  }

  getChangedNotifier() {
    return this.changedNotifier.asObservable();
  }

  updateCandidate(candidateId : string | null, bodyData: object) {
    return this.http.put(this.updateCandidateUrl + candidateId, bodyData , {headers: HttpUtils.getAuthHeader()});
  }

  addNewCandidate (bodyData:object) {
    return this.http.post(this.addNewCandidateUrl, bodyData, {headers: HttpUtils.getAuthHeader()});
  }

  moveCandidate(candidateId: string, newStageCode: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("candidateId", candidateId);
    httpParams = httpParams.append("newStageCode", newStageCode);

    return this.http.post(this.moveCandidateUrl, null , { headers : HttpUtils.getAuthHeader(), params: httpParams});
  }

}
