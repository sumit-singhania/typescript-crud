import { TestBed } from '@angular/core/testing';

import { EditDeleteUserService } from './edit-delete-user.service';

describe('EditDeleteUserService', () => {
  let service: EditDeleteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDeleteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
