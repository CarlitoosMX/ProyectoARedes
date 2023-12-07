import { Component, OnInit } from '@angular/core';
import { ApiService, EventResponse } from '../../service/api.service';
@Component({
  selector: 'app-proxpartidos',
  templateUrl: './proxpartidos.component.html',
  styleUrls: ['./proxpartidos.component.css']
})
export class ProxpartidosComponent implements OnInit {
  // Usa la interfaz para definir el tipo de datos
  ppartidos: EventResponse[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.partidos();
  }

  partidos() {
    this.apiService.getLastEvents('133602').subscribe((data: EventResponse) => {
      // Asigna la propiedad específica del objeto JSON que esperas recibir
      this.ppartidos = data.events;
      console.log(this.ppartidos);
    });
  }
}