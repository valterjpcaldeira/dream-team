import { TestBed, inject } from '@angular/core/testing';

import { BusinnessService } from './businness.service';

describe('BusinnessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinnessService]
    });
  });

  it('should be created', inject([BusinnessService], (service: BusinnessService) => {
    expect(service).toBeTruthy();
  }));
});
