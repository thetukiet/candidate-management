import { TestBed } from '@angular/core/testing';

import { StageDataService } from './stage-data.service';

describe('BoardDataService', () => {
  let service: StageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
