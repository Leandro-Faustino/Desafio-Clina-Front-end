import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-horario',
  templateUrl: './painel-horario.component.html',
  styleUrls: ['./painel-horario.component.scss']
})
export class PainelHorarioComponent implements OnInit {
showMe: boolean= false
  constructor() { }

  ngOnInit() {
  }
  show(){
    this.showMe= !this.showMe;

  }
}
