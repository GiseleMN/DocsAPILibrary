import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tb-controle',
  templateUrl: './tabela-controle.component.html',
  styleUrls: ['./tabela-controle.component.css']
})
export class TabelaControleComponent implements OnInit {

  tb_titulo: string[] = ['Teste', 'Data', 'Ação', 'Resultados Esperados', 'Resultados Obtidos', 'Aprovado (sim/não)']


  constructor() { }

  ngOnInit(): void {
  }

}
