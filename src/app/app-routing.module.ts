import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { ProxpartidosComponent } from './pages/proxpartidos/proxpartidos.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { LoginComponent } from './shared/login/login.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'equipos', component: EquiposComponent},
  {path: 'proxpartidos', component: ProxpartidosComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'jugadores', component: JugadoresComponent},
  
  {path: 'login', component: LoginComponent},

  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
