import { Component, Input, OnInit } from '@angular/core';
import { rendenizacao } from './render-li';

@Component({
  selector: 'app-li-bicolor',
  templateUrl: './render-li.component.html',
  styleUrls: ['./render-li.component.css']
})
export class RenderLiComponent implements OnInit {

  @Input() id: string | null = "";
  nome: string = "";
  conteudo: string = "";

  constructor() { }

  ngOnInit(): void {
    rendenizacao.map(
      value => value.id == this.id)
    this.setRenderLi(this.id)
  }
  setRenderLi(id: string | null) {
    const result = rendenizacao.filter(
      render_li => render_li.id == id)[0]

    this.nome = result.nome
    this.conteudo = result.conteudo
  }

}
