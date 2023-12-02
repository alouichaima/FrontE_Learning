import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriComponent } from './inscri.component';

describe('InscriComponent', () => {
  let component: InscriComponent;
  let fixture: ComponentFixture<InscriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriComponent]
    });
    fixture = TestBed.createComponent(InscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
