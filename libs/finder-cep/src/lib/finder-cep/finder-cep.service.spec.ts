/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { FinderCepService } from './finder-cep.service';

describe('Service: FinderCep.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinderCepService]
    });
  });

  it('should ...', inject([FinderCepService], (service: FinderCepService) => {
    expect(service).toBeTruthy();
  }));
});
