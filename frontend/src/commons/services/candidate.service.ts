import { TuiDialogService, TuiDialogContext } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Injectable } from '@angular/core';
import { CandidateDialogComponent } from '../components/modals/candidate-dialog/candidate-dialog.component';
import { Candidate } from '../models/candidate.model';
import { environment }  from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONST } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private dialogService: TuiDialogService, private http: HttpClient) {}
  private addNewCandidateUrl = environment.API_SERVER_URL +'/Candidate/AddNewCandidate';
  private updateCandidateUrl = environment.API_SERVER_URL +'/Candidate/UpdateCandidate/{candidateId}';
  private moveCandidateUrl = environment.API_SERVER_URL +'/Candidate/MoveCandidate/{candidateId}';

  openUserFormDialog() {
    this.dialogService.open(new PolymorpheusComponent(CandidateDialogComponent), {
      label: 'Candidate Information',
      size: 'l',
    }).subscribe();
  }


  updateCandidate(param: Candidate) {
    return this.http.put(this.updateCandidateUrl + param.id, param , {headers: this.getHeader()});
  }

  moveCandidate(candidateId: string, newStageCode: string) {
    return this.http.post(this.moveCandidateUrl + candidateId, newStageCode , {headers: this.getHeader()});
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