import { Component, Input, OnInit } from '@angular/core';
import { conteudo_five } from './conteudo-five';

@Component({
  selector: 'app-itens-five',
  templateUrl: './conteudo-itens-five.component.html',
  styleUrls: ['./conteudo-itens-five.component.css']
})
export class ConteudoItensFiveComponent implements OnInit {

  @Input() id: string | null = "";
  fiveTitle: string = "";
  itemOne: string = "";
  itemTwo: string = "";
  itemThree: string = "";
  itemFour: string = "";
  itemFive: string = "";

  constructor() { }

  ngOnInit(): void {
    conteudo_five.map(value =>
      value.id == this.id)
    this.setValueFiveItens(this.id)
  }
  setValueFiveItens(id: string | null) {
    const result = conteudo_five.filter(
      five_conteudo => five_conteudo.id == this.id)[0]

    this.fiveTitle = result.fiveTitle
    this.itemOne = result.itemOne
    this.itemTwo = result.itemTwo
    this.itemThree = result.itemThree
    this.itemFour = result.itemFour
    this.itemFive = result.itemFive
  }

}
