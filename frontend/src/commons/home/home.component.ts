import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { TaskModalComponent } from '../components/modals/task-modal/task-modal.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProjectBoardComponent } from '../components/project-board/project-board.component';
import { SidebarToggleComponent } from '../components/sidebar-toggle/sidebar-toggle.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ThemeTogglerComponent } from '../components/sidebar/theme-toggler/theme-toggler.component';
import { Stage } from '../models/stage.model';
import { Candidate } from '../models/candidate.model';
import { StageService } from '../services/stage.service';
import { APP_CONST } from '../../constants';
import { CandidateDialogComponent } from '../components/modals/candidate-dialog/candidate-dialog.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    ThemeTogglerComponent,
    NavbarComponent,
    ProjectBoardComponent,
    SidebarToggleComponent,
    TaskModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent implements OnInit {
  user: any;
  stages: Stage[] = [];

  constructor(
    private stageService: StageService,
    private dialog: MatDialog,
    private router: Router
    ) {}

  ngOnInit() {
    this.stageService.getStages().subscribe(data => {
      this.stages = data;
    });
    this.user = JSON.parse(localStorage.getItem(APP_CONST.AUTH_INFO_KEY)!);
    if (this.user == null) {
      this.router.navigate(['/login']);
    }

  }

  darkMode = false;

  isSidebarOpen = true;

  addTask(): void {
    const dialogRef = this.dialog.open(CandidateDialogComponent, {
      data: {
        editMode: false,
        columns: this.stages,
      },
    });

    dialogRef.afterClosed().subscribe((res: Candidate) => {
      if (!res) {
        return;
      }
      this.stageService.getStages().subscribe(data => {
        this.stages = data;
      });
      dialogRef.close();
      // this.updateTask({ task: res, columnName: res?.currentStage, mode: 'add' });
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
  editTask(editTask: Candidate): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        task: editTask,
        editMode: true,
        columns: this.stages,
      },
    });

    dialogRef.afterClosed().subscribe((res: Candidate) => {
      if (!res) {
        return;
      }
      this.stageService.getStages().subscribe(data => {
        this.stages = data;
      });
      // this.updateTask({ task: res, columnName: res?.currentStage, mode: 'edit' });
    });
  }

  updateTask(updateTask: { task: Candidate; columnName: string; mode: string }) {
    let newData = this.stages.map( (stage: Stage, i: number) => {
      if (stage.name === updateTask.task?.currentStage) {
        if (updateTask.mode === 'edit') {
          this.stages[i].candidates.map((candidate: Candidate, k: number)=>{
            if (candidate.email === updateTask.task?.email) {
              this.stages[i].candidates[k] = updateTask.task;
            }
          })
        }
        if (updateTask.mode === 'add') {
          this.stages[i].candidates.push(updateTask.task);
        }
      }
    })
    // this.stageDataService.setData(this.stages);
  }


}
