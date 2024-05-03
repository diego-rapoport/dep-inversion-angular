import { TestBed } from '@angular/core/testing';

import { ServBService } from './serv-b.service';

describe('ServBService', () => {
  let service: ServBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
