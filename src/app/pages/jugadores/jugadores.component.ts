import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit{
  jugadoresV: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.jugadores();
  }

  jugadores() {
    this.apiService.getPlayers().subscribe((data) => {
      this.jugadoresV = data.player;
      console.log(this.jugadoresV);
    });
  }
}
