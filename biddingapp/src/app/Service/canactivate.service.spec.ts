import { TestBed, inject } from '@angular/core/testing';

import { CanactivateService } from './canactivate.service';

describe('CanactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactivateService]
    });
  });

  it('should be created', inject([CanactivateService], (service: CanactivateService) => {
    expect(service).toBeTruthy();
  }));
});
