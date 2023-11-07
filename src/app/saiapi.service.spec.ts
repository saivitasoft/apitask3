import { TestBed } from '@angular/core/testing';

import { SaiapiService } from './saiapi.service';

describe('SaiapiService', () => {
  let service: SaiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
