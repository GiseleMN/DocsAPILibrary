import { Component, Input, OnInit } from '@angular/core';
import { conteudo } from './conteudo';




@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  @Input() id: string | null = "";

  titulo: string = "";

  conteudoItemOne: string = "";

  conteudoItemTwo: string = "";


  constructor() { }

  ngOnInit(): void {
    conteudo.map(value =>
      value.id == this.id)
    this.setValueConteudo(this.id)
  }

  setValueConteudo(id: string | null) {
    const result = conteudo.filter(
      conteudo_teste => conteudo_teste.id == id)[0]

    this.titulo = result.titulo
    this.conteudoItemOne = result.itemOne
    this.conteudoItemTwo = result.itemTwo
  }

}
