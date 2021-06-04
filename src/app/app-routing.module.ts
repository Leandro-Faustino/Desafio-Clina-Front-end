import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorariosComponent } from './horarios/horarios.component';
import { SalasDisponiveisComponent } from './salas-disponiveis/salas-disponiveis.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';


const routes: Routes = [
  {
    path:'' ,
    component: TelaLoginComponent
  },

  {
    path:'salas' ,
    component: SalasDisponiveisComponent
  },

  {
    path:'horarios' ,
    component: HorariosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
