import { AppConstants } from './../shared/Authentication/appConstants';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatasService {
  constructor(private http: HttpClient) { }
 static receberId = new EventEmitter()
detalhes
idHorarios
buscarSalas(dataCorreta){
 let url=`${AppConstants.baseServidor}room?date=${dataCorreta}`
return this.http.get(url)
  }

  detalheSalas(id){
this.http.get(`${AppConstants.baseServidor}room?id=${id}`).subscribe(data =>
  {
    DatasService.receberId.emit(data)
    this.detalhes=data
    ;

  })
  }
  buscarHorarios(dataCorreta){
this.detalhes;
this.detalhes.map(data => {
 this.idHorarios= data.id;

})
console.log(this.idHorarios);

let url= `${AppConstants.baseServidor}room/?date=${dataCorreta}&id=${this.idHorarios}`
   return this.http.get(url)

  }

}
