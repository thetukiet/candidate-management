import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Stage } from '../../../models/stage.model';
import { Candidate } from '../../../models/candidate.model';
import { MatRadioModule } from '@angular/material/radio';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, ReactiveFormsModule,
    MatMenuModule,
    MatRadioModule,
    TuiInputModule,


  ],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss',

})
export class TaskModalComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  form!: FormGroup;
  opened = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    // data: {
    //   candidate: candidate,
    //   columns: this.data,
    //   editMode: 'update'
    // },
    public data: {
      candidate: Candidate;
      columns: Stage[];
      editMode: boolean;
    },
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    // let fullName = this.data.columns?.firstName + ' ' + this.data.task?.lastName;
    // this.form = this.fb.nonNullable.group({
    //   name: this.fb.control(fullName || '', {
    //     validators: [Validators.required],
    //   }),
    //   email: this.fb.control(this.data.task?.email || '', {
    //     validators: [Validators.required],
    //   }),
    //   phoneNumber: this.fb.control(this.data.task?.phoneNumber || '', {
    //     validators: [Validators.required],
    //   }),
    //   gender: this.fb.control(this.data.task?.gender || 'male', {

    //   }),
    //   status: this.fb.control(this.data.task?.currentStage || '', {

    //   }),


    //});


  }

  get subTaskArray() {
    return this.form.get('subtasks') as FormArray;
  }


  removeSubtask(index: number): void {
    this.subTaskArray.removeAt(index);
  }

  openDropdown(): void {
    this.trigger.openMenu();
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }

  submit() {
    const editMode = this.data.editMode;

    if (editMode) {
      // const updatedBoard: Candidate = {
      //   ...this.data.task,
      //   ...this.form.value,
      // };

      //this.dialogRef.close({ ...updatedBoard });
    }

    if (!editMode) {
      this.dialogRef.close({ ...this.form.value });
    }

  }
}
