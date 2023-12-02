import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeformateurComponent } from './listeformateur.component';

describe('ListeformateurComponent', () => {
  let component: ListeformateurComponent;
  let fixture: ComponentFixture<ListeformateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeformateurComponent]
    });
    fixture = TestBed.createComponent(ListeformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
