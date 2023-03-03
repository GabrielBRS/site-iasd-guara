/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SetTimeService } from './set-time.service';

describe('Service: SetTime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetTimeService]
    });
  });

  it('should ...', inject([SetTimeService], (service: SetTimeService) => {
    expect(service).toBeTruthy();
  }));
});
