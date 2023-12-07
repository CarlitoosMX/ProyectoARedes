import { Component, OnInit } from '@angular/core';
import { ApiService, EventResponse } from '../../service/api.service';
@Component({
  selector: 'app-proxpartidos',
  templateUrl: './proxpartidos.component.html',
  styleUrls: ['./proxpartidos.component.css']
})
export class ProxpartidosComponent implements OnInit {
  // Usa la interfaz para definir el tipo de datos
  ppartidos: any;
  prediccion: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.partidos();
    //this.prediction();
  }

  partidos() {
    this.apiService.getLastEvents().subscribe((data) => {
      // Asigna la propiedad específica del objeto JSON que esperas recibir
      this.ppartidos = data.events;
      console.log(this.ppartidos);
    });
  }

  prediction(equipo1: string, equipo2: string, i: number){
    const predictionData = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {"role": "system", "content": "Eres un analista de futbol dedicado a analizar el rendimiento de los equipos."},
        {"role": "user", "content": `Los equipos de la Liga Mexicana MX siguientes van a jugar un partido, y estas son algunas estadísticas pasadas de sus partidos anteriores: ${equipo1}: Últimos partidos jugados: 2-0, ganador, 2-1, ganador, 3-0, perdedor; ${equipo2}: Últimos partidos jugados: 3-1, perdedor, 1-0, ganador, 0-0, empate. Analiza el rendimiento de ambos equipos y determina quién tiene más posibilidades de salir victorioso del encuentro.`}
      ]
    };

    this.apiService.requestPrediction(predictionData).subscribe((response) => {
      console.log(response.choices[0].message.content);
      this.prediccion[i] = response.choices[0].message.content;
    });
  }
}