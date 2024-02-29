import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {TuiInputModule} from '@taiga-ui/kit';
import {TuiAlertService} from '@taiga-ui/core';
import {Candidate} from '../../../models/candidate.model';
import {CandidateService} from "../../../services/candidate.service";

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

  constructor(private fb: FormBuilder,
              private alertService: TuiAlertService,
              private candidateService : CandidateService,
              public dialogRef: MatDialogRef<CandidateDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: {
                candidate: Candidate;
                isEdit: boolean;
              },){

    this.form = this.fb.nonNullable.group({
      firstName: this.fb.control(this.data.candidate?.firstName || '', {
        validators: [Validators.required],
      }),
      lastName: this.fb.control(this.data.candidate?.lastName || '', {
        validators: [Validators.required],
      }),
      email: this.fb.control(this.data.candidate?.email || '', {
        validators: [Validators.required, Validators.email],
      }),
      phoneNumber: this.fb.control(this.data.candidate?.phoneNumber || '', {
        validators: [Validators.required],
      }),
      gender: this.fb.control(this.data.candidate?.gender || 'male', {

      }),
      position: this.fb.control(this.data.candidate?.position || '', {
        validators: [Validators.required],
      }),

    });

  }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.data.isEdit) {
      this.updateCandidate();
    } else {
      this.addNewCandidate();
    }
  }

  addNewCandidate() {
    this.candidateService.addNewCandidate(this.form.value).subscribe({
      next: (response) => {
        this.candidateService.notifyUpdateSuccess(null);
        this.alertService.open("New candidate created successfully", {status : 'success'}).subscribe();
        this.onClose();
      },
      error: (error) => {
        this.alertService.open(error.error.title, {
          label: 'Cannot add new candidate',
          status: 'error',
        }).subscribe();
      }
    });
  }

  updateCandidate() {
    this.candidateService.updateCandidate(this.data.candidate.id, this.form.value).subscribe({
      next: (response) => {
        // TODO: send more data to notifier
        this.candidateService.notifyUpdateSuccess(null);
        this.alertService.open("Candidate updated successfully", {status : 'success'}).subscribe();
        this.onClose();
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
