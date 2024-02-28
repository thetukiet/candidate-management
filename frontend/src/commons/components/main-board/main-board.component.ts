import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Candidate } from '../../models/candidate.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskOption } from '../../models/modal.model';
import { Stage } from '../../models/stage.model';
import { CandidateDialogComponent } from '../modals/candidate-dialog/candidate-dialog.component';

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
    // CandidateDialogComponent
  ],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss',
})
export class MainBoardComponent {

  @Input() data!: any;
  // @Output() columnAdd = new EventEmitter<void>();
  // @Output() boardEdit = new EventEmitter<Board>();
  @Output() taskUpdate = new EventEmitter<{ task: Candidate; columnName: string; mode: string }>();
  @Output() taskUpdateModal = new EventEmitter<Candidate>();
  @Output() taskDeleteModal = new EventEmitter<Candidate>();
  candidateService: any;

  constructor(private dialog: MatDialog,
    // private candidateService: CandidateService
    ) {
    console.log('activeBoard ', this.data);
  }

  getThemeColor(theme: string) {
    if ( theme === 'FAILED' ) return '#ff595e';
    if ( theme === 'SUCCESS' ) return '#38b000';
    return '#8ecae6';

  }

  moveCandidate (id: string, newStageCode: string) {
    this.candidateService.moveCandidate(id, newStageCode);
  }
  drop(event: CdkDragDrop<Candidate[]>, column: Stage) {
    if (this.data) {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.moveCandidate(event.item?.data.id,  column.code);

      } else {
        this.moveCandidate(event.item?.data.id, column.code);
       let status = this.checkConditionDrog(column, event.container.data, event.currentIndex);
       //if (status) return;
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

        // this.boardEdit.emit(this.data);
      }
    }
  }
  checkConditionDrog(column: Stage, data: Candidate[], index: number) {
    console.log('column ', column, ' data bvsbv',  data[1],  ' index ', index)
    let columnCode = column?.code;
    // let arr = JSON.parse(data);
    // data
    // data.map((candidate: Task, k: number)=>{
    //   if (candidate.email === updateTask.task?.email) {
    //     this.stages[i].candidates[k] = updateTask.task;
    //   }
    // })
    if (data && data.length >0) {
      let candidateStatus = data[1]?.currentStage;
      console.log('columnCode ', columnCode, ' candidateStatus ', data[1] );
    }

    return true;
    // let currentColumn =  this.data.filter((x:Column) => x.name.toLowerCase() === candidateStatus.toLowerCase())

    // let curListmovableStages = currentColumn?.movableStages;
    // console.log('columnCode ', columnCode, ' candidateStatus ', candidateStatus , ' currentColumn ', currentColumn , ' curListmovableStages ', curListmovableStages);


  }

  viewTask(candidate: Candidate): void {
    const dialogRef = this.dialog.open(CandidateDialogComponent, {
      data: {
        candidate: candidate,
        columns: this.data,
        editMode: 'update'
      },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe((result: TaskOption) => {
      // if (result === TaskOption.Edit) {
      //   this.taskUpdateModal.emit(candidate);
      // } else if (result === TaskOption.Delete) {
      //   this.taskDeleteModal.emit(candidate);
      // } else {
      //   const updateTask = {
      //     task: dialogRef.componentInstance?.data?.columns
      //     columnName: dialogRef.componentInstance?.data?.task?.currentStage,
      //     mode: ''
      //   };

      //   this.taskUpdate.emit(updateTask);
      // }
    });
  }

}
