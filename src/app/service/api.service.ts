import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define una interfaz que represente la estructura del objeto JSON que esperas recibir
export interface EventResponse {
  // Define las propiedades del objeto JSON aquí
  events: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private urlApi2 = 'https://thesportsdb.com/api/v1/json/3/eventslast.php';

  constructor(private http: HttpClient) { }

  public getLastEvents(): Observable<any> {
    const url = 'https://thesportsdb.com/api/v1/json/3/eventsround.php?id=4350&r=17&s=2023-2024';
    return this.http.get<any>(url);
  }

  public getTeams(): Observable<any> {
    const url = 'http://34.125.127.9:3000/data/equipos';
    return this.http.get<any>(url);
  }

  public getResults(): Observable<any> {
    const url = 'http://34.125.243.118:3000/data/resultados';
    return this.http.get<any>(url);
  }

  public getPlayers(): Observable<any> {
    const url = 'http://34.125.127.9:3000/data/jugadores';
    return this.http.get<any>(url);
  }

  public getPredictions(): Observable<any> {
    const url = 'http://34.125.243.118:3000/data/predicciones';
    return this.http.get<any>(url);
  }

  public getUsers(): Observable<any> {
    const url = 'http://34.125.127.9:3000/data/usuarios';
    return this.http.get<any>(url);
  }

  public requestPrediction(body: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer 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'});
    return this.http.post<any>('https://api.openai.com/v1/chat/completions', body, { headers });
  }
}