import { TestBed } from '@angular/core/testing';

import { StageHttpService } from './stage-http.service';

describe('BoardHttpService', () => {
  let service: StageHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
