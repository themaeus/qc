import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Questao {
  txt_Questao: string;
  alternativa_A: string;
  alternativa_B: string;
  alternativa_C: string;
  alternativa_D: string;
  alternativa_E: string;
  resposta: string;
  id_Questao: number;
}

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  private readonly apiURL = 'http://localhost:3000/questao';
  constructor(private http: HttpClient) {}

  getQuestoes(): Observable<Questao[]> {
    return this.http.get<Questao[]>(this.apiURL);
  }

  ngOnInit(): void {}
}
