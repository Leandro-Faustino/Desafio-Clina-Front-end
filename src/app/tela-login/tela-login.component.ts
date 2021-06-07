import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {

formulario=new FormGroup({
  email: new FormControl('',Validators.required),
  password : new FormControl('',Validators.required)
});

usuario={
  email:'',
  password: ''
}
loginOk;
  constructor(private Loginservice:LoginService,
              private routes: Router
    ) { }

  ngOnInit() {
  }



public login() {
   this.Loginservice.login(this.usuario).subscribe(data => {
data.map(data =>{
  if(data.email === this.usuario.email && data.password === this.usuario.password){
    this.routes.navigate(['/salas'])
  }else {
    return;

  }
})

   })
    }
 }








