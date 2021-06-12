import { catchError } from 'rxjs/operators';
import { DatasService } from './../../../services/datas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable, of } from 'rxjs';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
formulario= new FormGroup({
  dias: new FormControl(''),
})

response:any=[]
detalhes:any=[]

constructor(private dataServices:DatasService,
            private router:Router
  ){}

ngOnInit() {

this.formulario.valueChanges.subscribe(data => {
let {dias}= data
let dataCorreta =format(new Date(dias), 'yyyy-MM-dd')

if(dataCorreta) {
  this.dataServices.buscarSalas(dataCorreta).subscribe(data =>{
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
  this.dataServices.detalheSalas(id)


}
}












