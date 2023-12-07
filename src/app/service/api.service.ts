import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  private urlApi2 = 'https://thesportsdb.com/api/v1/json/3/eventslast.php';

  constructor(private http: HttpClient) { }

  public getLastEvents(teamId: string): Observable<any> {
    const url = `${this.urlApi2}?id=${teamId}`;
    return this.http.get<any>(url);
  }
}