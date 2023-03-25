import { Component, OnInit, Input } from '@angular/core';
import { tabelas } from './tables';

@Component({
  selector: 'app-tabela-content',
  templateUrl: './tabela-content.component.html',
  styleUrls: ['./tabela-content.component.css']
})
export class TabelaContentComponent implements OnInit {

  @Input() id: string | null = "0";
  tableTitle: string = "";

  contentOne: string = "";
  contentOneLeft: string = "";

  contentTwo: string = "";
  contentTwoLeft: string = "";

  contentThree: string = "";
  contentThreeLeft: string = "";

  contentFour: string = "";
  contentFourLeft: string = "";

  constructor() { }

  ngOnInit(): void {
    tabelas.map(value =>
      value.id == this.id)
    this.SetValuesTable(this.id)
  }

  SetValuesTable(id: string | null) {
    const result = tabelas.filter(
      table_area => table_area.id == id)[0]

    this.tableTitle = result.tableTitle
    this.contentOne = result.contentOne
    this.contentOneLeft = result.contentOneLeft
    this.contentTwo = result.contentTwo
    this.contentTwoLeft = result.contentTwoLeft
    this.contentThree = result.contentThree
    this.contentThreeLeft = result.contentThreeLeft
    this.contentFour = result.contentFour
    this.contentFourLeft = result.contentFourLeft
  }

}
