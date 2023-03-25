import { Component, OnInit, Input } from '@angular/core';
import { itens_eight } from './conteudo-eight';

@Component({
  selector: 'app-itens-eight',
  templateUrl: './conteudo-itens-eight.component.html',
  styleUrls: ['./conteudo-itens-eight.component.css']
})
export class ConteudoItensEightComponent implements OnInit {

  @Input() id: string | null = "";
  eightTitle: string = "";
  itemOne: string = "";
  itemTwo: string = "";
  itemThree: string = "";
  itemFour: string = "";
  itemFive: string = "";
  itemSix: string = "";
  itemSeven: string = "";
  itemEight: string = "";

  constructor() { }

  ngOnInit(): void {
    itens_eight.map(
      value => value.id == this.id)
    this.setEightItens(this.id)
  }
  setEightItens(id: string | null) {
    const result = itens_eight.filter(
      eight_item => eight_item.id == id)[0]
    this.eightTitle = result.eightTitle
    this.itemOne = result.itemOne
    this.itemTwo = result.itemTwo
    this.itemThree = result.itemThree
    this.itemFour = result.itemFour
    this.itemFive = result.itemFive
    this.itemSix = result.itemSix
    this.itemSeven = result.itemSeven
    this.itemEight = result.itemEight
  }

}
