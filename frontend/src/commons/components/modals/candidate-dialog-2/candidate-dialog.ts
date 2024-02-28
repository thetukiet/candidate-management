import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { APP_CONST } from '../../../../constants';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'app-candidate-dialog',
  templateUrl: './candidate-dialog.component.html',
  styleUrls: ['./candidate-dialog.component.scss'],
  imports: [
    TuiInputModule,
  ],
})
export class CandidateDialogComponent2 {
  userForm: FormGroup;
  private addNewCandidateUrl = environment.API_SERVER_URL +'/Candidate/AddNewCandidate';
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      position: ['', Validators.required]
    });

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
  submitForm() {
    if (this.userForm.valid) {
      this.http.post(this.addNewCandidateUrl, this.userForm.value, {headers: this.getHeader()}).subscribe({
        next: (response) => {
          // Handle successful response
          console.log(response);
          // Close dialog if applicable
        },
        error: (error) => {
          // Handle error
          console.error(error);
        }
      });
    }
  }
}