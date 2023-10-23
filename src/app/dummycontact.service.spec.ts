import { TestBed } from '@angular/core/testing';

import { DummycontactService } from './dummycontact.service';

describe('DummycontactService', () => {
  let service: DummycontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummycontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
