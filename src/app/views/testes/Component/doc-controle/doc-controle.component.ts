import { Component, Input, OnInit } from '@angular/core';
import { doc_controle } from './doc-controle';

@Component({
  selector: 'app-doc-controle',
  templateUrl: './doc-controle.component.html',
  styleUrls: ['./doc-controle.component.css']
})
export class DocControleComponent implements OnInit {

  @Input() id: string | null = "";
  itemOne: string = "";
  itemTwo: string = "";
  itemThree: string = "";
  itemFour: string = "";

  constructor() { }

  ngOnInit(): void {
    doc_controle.map(
      value => value.id == this.id)
    this.setValueDocControle(this.id)
  }

  setValueDocControle(id: string | null) {
    const result = doc_controle.filter(
      doc_controle => doc_controle.id == id)[0]

    this.itemOne = result.itemOne;
    this.itemTwo = result.itemTwo;
    this.itemThree = result.itemThree;
    this.itemFour = result.itemFour;
  }

}
