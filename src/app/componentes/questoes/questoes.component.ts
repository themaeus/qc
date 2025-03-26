import { ServiceComponent } from './../service/service.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css'],
})
export class QuestoesComponent implements OnInit {
  questoes: any[] = [];
  indiceAtual = 0;
  alternativaSelecionada: string | null = null;
  resposta: string | null = null;
  pontuacaoInicial: number = 0;
  pontuacaoMarcada: boolean = false;

  selecionarAlternativa(option: string) {
    this.alternativaSelecionada = option;
    if (!this.pontuacaoMarcada) {
      this.marcaPonto();
      this.pontuacaoMarcada = true;
    }
  }

  proximaQuestao() {
    if (this.indiceAtual < this.questoes.length - 1) {
      this.indiceAtual++;
    } else {
      this.indiceAtual = 0;
      this.pontuacaoInicial = 0;
    }
    this.alternativaSelecionada = null;
    this.resposta = this.questoes[this.indiceAtual]?.resposta;
    this.pontuacaoMarcada = false;
  }

  marcaPonto() {
    if (this.alternativaSelecionada === this.resposta) {
      this.pontuacaoInicial++;
    }
  }

  constructor(private serviceComponent: ServiceComponent) {}

  ngOnInit(): void {
    this.serviceComponent.getQuestoes().subscribe((data) => {
      this.questoes = data;
      this.resposta = this.questoes[this.indiceAtual]?.resposta;
    });
  }
}
