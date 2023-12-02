import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformateurComponent } from './addformateur.component';

describe('AddformateurComponent', () => {
  let component: AddformateurComponent;
  let fixture: ComponentFixture<AddformateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddformateurComponent]
    });
    fixture = TestBed.createComponent(AddformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
