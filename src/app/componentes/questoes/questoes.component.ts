import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css'],
})
export class QuestoesComponent implements OnInit {
  selectedOption: string | null = null;
  correctAnswer = 'C';

  selectOption(option: string) {
    this.selectedOption = option;
  }

  constructor() {}

  ngOnInit(): void {}
}
