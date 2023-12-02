/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { User_crudService } from './user_crud.service';

describe('Service: User_crud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User_crudService]
    });
  });

  it('should ...', inject([User_crudService], (service: User_crudService) => {
    expect(service).toBeTruthy();
  }));
});
