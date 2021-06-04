import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {

formulario=new FormGroup({
  email: new FormControl(''),
  password : new FormControl('')
});

  constructor(private service:LoginService ) { }

  ngOnInit() {
  }
value= this.formulario.get('email');

public login(value) {
  this.service.login(value);
}

}
