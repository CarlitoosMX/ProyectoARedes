import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { EquiposComponent } from './equipos/equipos.component';
import { ProxpartidosComponent } from './proxpartidos/proxpartidos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

@NgModule({
  declarations: [
    HomeComponent,
    EquiposComponent,
    ProxpartidosComponent,
    ResultadosComponent,
    JugadoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbRatingModule
  ]
})
export class PagesModule { }
