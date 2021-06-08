import { catchError } from 'rxjs/operators';
import { DatasService } from './../../../services/datas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable, of } from 'rxjs';
import { format } from 'date-fns';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
formulario= new FormGroup({
  dias: new FormControl(''),
  periodo: new FormControl('')
})
dataCerta
response:any=[]
constructor(private dataServices:DatasService ){}

ngOnInit() {

this.formulario.valueChanges.subscribe(data => {
  this.dataCerta= data
    let {dias,periodo}= this.dataCerta
let dataCorreta =format(new Date(dias), 'yyyy-MM-dd')
if(dataCorreta  && periodo) {
  this.dataServices.buscarSalas(periodo,dataCorreta).subscribe(data =>{
    this.response=data

  })
}else{
 catchError((error) =>{
   console.error(error);
   return of()
 })
}
})
}

detalhesSala(id) {
  console.log(id)
}
}












