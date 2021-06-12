import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { MenuHeaderComponent } from './shared/components/menu-header/menu-header.component';
import { MaterialModule } from './shared/components/material-module/materialModule';
import { ContentComponent } from './shared/components/content/content.component';
import { PainelHorarioComponent } from './shared/components/painel-horario/painel-horario.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SalasDisponiveisComponent } from './salas-disponiveis/salas-disponiveis.component';
import { HorariosComponent } from './horarios/horarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';
import { ObjToArrayPipe } from './objToArray.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    MenuHeaderComponent,
    ContentComponent,
    PainelHorarioComponent,
    FooterComponent,
    SalasDisponiveisComponent,
    HorariosComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
