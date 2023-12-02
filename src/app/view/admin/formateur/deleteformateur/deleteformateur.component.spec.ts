import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteformateurComponent } from './deleteformateur.component';

describe('DeleteformateurComponent', () => {
  let component: DeleteformateurComponent;
  let fixture: ComponentFixture<DeleteformateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteformateurComponent]
    });
    fixture = TestBed.createComponent(DeleteformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
