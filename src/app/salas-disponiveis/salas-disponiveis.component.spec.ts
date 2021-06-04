import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasDisponiveisComponent } from './salas-disponiveis.component';

describe('SalasDisponiveisComponent', () => {
  let component: SalasDisponiveisComponent;
  let fixture: ComponentFixture<SalasDisponiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalasDisponiveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalasDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
