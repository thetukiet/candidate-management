import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { APP_CONST } from '../../../../constants';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'app-candidate-dialog',
  templateUrl: './candidate-dialog.component.html',
  styleUrls: ['./candidate-dialog.component.scss'],
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class CandidateDialogComponent {
  form: FormGroup;
  private addNewCandidateUrl = environment.API_SERVER_URL +'/Candidate/AddNewCandidate';

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private alertService: TuiAlertService,
    public dialogRef: MatDialogRef<CandidateDialogComponent>){

    this.form = this.fb.group({
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
  onClose(): void {
    this.dialogRef.close();
  }
  submitForm() {
      this.http.post(this.addNewCandidateUrl, this.form.value, {headers: this.getHeader()}).subscribe({
        next: (response) => {
          console.log(response);
          this.onClose();
          window.location.reload();
        },
        error: (error) => {
          this.alertService.open(error.error.title, {
            label: 'Candidate Update Error',
            status: 'error',
          }).subscribe();
        }
      });
  }
}