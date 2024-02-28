import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Stage } from '../../../models/stage.model';
import { TaskOption } from '../../../models/modal.model';
import { Candidate } from '../../../models/candidate.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-task-modal',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, MatMenuModule, FormsModule],
  templateUrl: './view-task-modal.component.html',
  styleUrl: './view-task-modal.component.scss',
})
export class ViewTaskModalComponent implements OnInit {
  activeStatus!: Stage;

  constructor(
    private dialogRef: MatDialogRef<ViewTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { candidate: Candidate;  columns: Stage[] },
  ) {}

  ngOnInit(): void {

  }

  updateStatus(event: Event) {
    const columnName = (event.target as HTMLSelectElement).value;

    this.data.candidate = {
      ...this.data.candidate,
      currentStage: columnName,
    };

    this.activeStatus = this.data.columns.filter(
      (column) => column.name === columnName,
    )[0];
  }

  editTask(): void {
    this.dialogRef.close(TaskOption.Edit);
  }

  deleteTask(): void {
    this.dialogRef.close(TaskOption.Delete);
  }
}
