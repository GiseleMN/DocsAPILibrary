import { Component, OnInit, Input } from '@angular/core';
import { cronograma } from './tabela-cronograma';

@Component({
  selector: 'app-cronograma',
  templateUrl: './tabela-cronograma.component.html',
  styleUrls: ['./tabela-cronograma.component.css']
})
export class TabelaCronogramaComponent implements OnInit {

  @Input() id: string | null = "";
  conteudo: string = "";
  left: string = "";
  right: string = "";

  constructor() { }

  ngOnInit(): void {
    cronograma.map(
      value => value.id == this.id)
    this.setValueTabelaCronograma(this.id)
  }
  setValueTabelaCronograma(id: string | null) {
    const result = cronograma.filter(
      tb_cronograma => tb_cronograma.id == id)[0]

    this.conteudo = result.conteudo
    this.left = result.left
    this.right = result.right
  }

}
