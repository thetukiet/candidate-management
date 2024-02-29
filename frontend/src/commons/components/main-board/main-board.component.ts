import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Candidate } from '../../models/candidate.model';
import { MatDialog } from '@angular/material/dialog';
import { Stage } from '../../models/stage.model';
import { CandidateDialogComponent } from '../modals/candidate-dialog/candidate-dialog.component';
import {CandidateService} from "../../services/candidate.service";
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'app-main-board',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgStyle,
    NgClass,
    CandidateCardComponent,
    DragDropModule,
  ],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent {
  @Input() data!: any;
  @Output() taskUpdate = new EventEmitter<{ task: Candidate; columnName: string; mode: string }>();
  @Output() taskUpdateModal = new EventEmitter<Candidate>();
  @Output() taskDeleteModal = new EventEmitter<Candidate>();

  constructor(private dialog: MatDialog,
              private candidateService: CandidateService,
              private alertService: TuiAlertService
    ) {
    console.log('activeBoard ', this.data);
  }

  getThemeColor(theme: string) {
    if ( theme === 'FAILED' ) return '#ff595e';
    if ( theme === 'SUCCESS' ) return '#38b000';
    return '#8ecae6';

  }

  drop(event: CdkDragDrop<Stage>, droppedStage: Stage) {
    if (this.data) {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data.candidates,
          event.previousIndex,
          event.currentIndex,
        );

      } else {
        let status = this.checkIfCanDrop(event.previousContainer.data, droppedStage);
        if (!status) {
          this.alertService.open("This candidate cannot be move to stage " + droppedStage.name, {status : 'warning'}).subscribe();
          return;
        }

        this.candidateService.moveCandidate(event.item.data?.id, droppedStage.code).subscribe({
          next: (response) => {
            this.alertService.open("New candidate created successfully", {status : 'success'}).subscribe();
          },
          error: (error) => {
            this.alertService.open("New candidate created successfully", {status : 'success'}).subscribe();
          }
        });

        transferArrayItem(
          event.previousContainer.data.candidates,
          event.container.data.candidates,
          event.previousIndex,
          event.currentIndex,
        );

      }
    }
  }

  checkIfCanDrop(sourceStage: Stage, targetStage: Stage) {
    if(sourceStage.movableStages.includes(targetStage.code)){
      return true;
    }

    return false;
  }

  openCandidate(candidate: Candidate): void {
    this.dialog.open(CandidateDialogComponent, {
      data: {
        candidate: candidate,
        isEdit: true
      },
      panelClass: 'custom-dialog-container'
    });

  }

}
