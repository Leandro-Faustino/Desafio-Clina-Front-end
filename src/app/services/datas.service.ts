import { AppConstants } from './../shared/Authentication/appConstants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  constructor(private http: HttpClient) { }
buscarSalas(periodo,dataCorreta){
 let url=`${AppConstants.baseServidor}room?date=${dataCorreta}&periodo=${periodo}`
return this.http.get(url)
  }

}
