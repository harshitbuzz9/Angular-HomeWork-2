import { TestBed } from '@angular/core/testing';

import { PorductssService } from './porductss.service';

describe('PorductssService', () => {
  let service: PorductssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorductssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
