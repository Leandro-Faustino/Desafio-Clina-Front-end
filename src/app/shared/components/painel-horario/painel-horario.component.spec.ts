import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelHorarioComponent } from './painel-horario.component';

describe('PainelHorarioComponent', () => {
  let component: PainelHorarioComponent;
  let fixture: ComponentFixture<PainelHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
