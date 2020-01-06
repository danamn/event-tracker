import { TestBed } from '@angular/core/testing';

import { GenerateIdService } from './generate-id.service';

describe('GenerateIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateIdService = TestBed.get(GenerateIdService);
    expect(service).toBeTruthy();
  });
});
