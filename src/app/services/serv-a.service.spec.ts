import { TestBed } from '@angular/core/testing';

import { ServAService } from './serv-a.service';

describe('ServAService', () => {
  let service: ServAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
