import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DatasService } from "./../../../services/datas.service";
import { Component, OnInit } from "@angular/core";
import { catchError, toArray } from "rxjs/operators";
import { of } from "rxjs";
import { format } from "date-fns";

@Component({
  selector: "app-painel-horario",
  templateUrl: "./painel-horario.component.html",
  styleUrls: ["./painel-horario.component.scss"],
})
export class PainelHorarioComponent implements OnInit {
  showMe: boolean = false;
  detalhes;
  response;
  ToArr;
  formulario = new FormGroup({
    calendario: new FormControl("", Validators.required),
  });

  constructor(private dataService: DatasService) {}

  ngOnInit() {
    DatasService.receberId.subscribe((data) => {
      this.response = data;

    });

  }

  show() {
    this.showMe = !this.showMe;
  }
}
