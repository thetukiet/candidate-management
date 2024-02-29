import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainBoardComponent } from '../components/main-board/main-board.component';
import { Stage } from '../models/stage.model';
import { StageService } from '../services/stage.service';
import { APP_CONST } from '../utils/constant';
import { CandidateDialogComponent } from '../components/modals/candidate-dialog/candidate-dialog.component';
import {CandidateService} from "../services/candidate.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    MainBoardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent implements OnInit {
  user: any;
  stages: Stage[] = [];
  darkMode = false;

  constructor(
    private stageService: StageService,
    private candidateService : CandidateService,
    private dialog: MatDialog,
    private router: Router
    ) {
    this.candidateService.getChangedNotifier().subscribe(() => {
      this.refreshData();
    });
  }

  ngOnInit() {
    this.refreshData();
    this.user = JSON.parse(localStorage.getItem(APP_CONST.AUTH_INFO_KEY)!);
    if (this.user == null) {
      this.router.navigate(['/login']);
    }
  }

  addNewCandidate(): void {
    this.dialog.open(CandidateDialogComponent, {
      data: {
        candidate: null,
        isEdit: false
      },
    });
  }

  refreshData(){
    this.stageService.getStages().subscribe(data => {
      this.stages = data;
    });
  }

}
