import { TestBed } from '@angular/core/testing';

import { AngularInlineSvgService } from './angular-inline-svg.service';

describe('AngularInlineSvgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularInlineSvgService = TestBed.get(AngularInlineSvgService);
    expect(service).toBeTruthy();
  });
});
