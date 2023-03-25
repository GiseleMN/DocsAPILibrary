import { Component, Input, OnInit } from '@angular/core';
import { requisitos } from './tabela';


@Component({
  selector: 'app-tb-requisitos',
  templateUrl: './tabela-requisitos.component.html',
  styleUrls: ['./tabela-requisitos.component.css']
})
export class TabelaRequisitosComponent implements OnInit {

  @Input() id: string | null = "";
  conteudo: string = "";
  columnLeft: string = "";
  columnRight: string = "";


  constructor() { }

  ngOnInit(): void {
    requisitos.map(value =>
      value.id === this.id)
    this.setValueTableRequisto(this.id);
  }
  setValueTableRequisto(id: string | null) {
    const resultado = requisitos.filter(
      tb_requisitos => tb_requisitos.id == id)[0]

    this.conteudo = resultado.conteudo
    this.columnLeft = resultado.left
    this.columnRight = resultado.right
  }
}
