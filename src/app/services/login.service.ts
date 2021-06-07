import { Router, Routes } from '@angular/router';
import { AppConstants } from './../shared/Authentication/appConstants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(   private http: HttpClient,
                 private router:Router
    ) { }
userAutenticado:any
   login(usuario) :Observable<any>{
const { email,password}= usuario


let url =`${AppConstants.baseLogin}?email=${email}&password=${password}`

  return this.http.get(url)

   }


    }







