import { TestBed, inject } from '@angular/core/testing';

import { ProccessService } from './proccess.service';

describe('ProccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProccessService]
    });
  });

  it('should be created', inject([ProccessService], (service: ProccessService) => {
    expect(service).toBeTruthy();
  }));
});
