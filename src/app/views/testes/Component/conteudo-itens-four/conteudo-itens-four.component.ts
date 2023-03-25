import { Component, OnInit, Input } from '@angular/core';
import { itens_four } from './conteudo-four';


@Component({
  selector: 'app-itens-four',
  templateUrl: './conteudo-itens-four.component.html',
  styleUrls: ['./conteudo-itens-four.component.css']
})
export class ConteudoItensFourComponent implements OnInit {

  @Input() id: string | null = "";
  fourTitle: string = "";
  itemOne: string = "";
  itemTwo: string = "";
  itemThree: string = "";
  itemFour: string = "";

  constructor() { }

  ngOnInit(): void {
    itens_four.map(value =>
      value.id == this.id)
    this.setValueFourItens(this.id)
  }
  setValueFourItens(id: string | null) {
    const result = itens_four.filter(
      itens_four => itens_four.id == id)[0]

    this.fourTitle = result.fourTitle
    this.itemOne = result.itemOne
    this.itemTwo = result.itemTwo
    this.itemThree = result.itemThree
    this.itemFour = result.itemFour
  }

}
