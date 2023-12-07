import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit{
  resultadosV: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.resultadosF();
  }

  resultadosF() {
    this.apiService.getResults().subscribe((data) => {
      this.resultadosV = data.results;
      console.log(this.resultadosV);
    });
  }
}
