import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit{
  equipos: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.equiposF();
  }

  equiposF() {
    this.apiService.getTeams().subscribe((data) => {
      this.equipos = data.teams;
      console.log(this.equipos);
    });
  }
}
