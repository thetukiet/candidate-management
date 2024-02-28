import {
  Inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Board } from '../../models/board.model';
import { Candidate } from '../../models/candidate.model';
import { Stage } from '../../models/stage.model';
import { StageHttpService } from '../stage-http/stage-http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StageDataService {
  private dataSubject: Subject<Stage[]> = new Subject<Stage[]>();

  currentIdx = signal(0);
  activeBoard = null;
  constructor(
    private stageHttp: StageHttpService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  setData(data: Stage[]) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
  @Injectable({
    providedIn: 'root'
  })

   async getStageData() {
    let stageBoard!: Stage[] | null;
    if (stageBoard) {
      this.setData(stageBoard);
    } else {
      let result = await this.stageHttp.getStageData();
      console.log('result ', result);
      // this.setData(result);
      // this.stageHttp
      //   .getStageData()
      //   .then((res) => {


      //   });
    }
  }

  selectBoard(boardIdx: number) {
    this.currentIdx.set(boardIdx);
  }

}
