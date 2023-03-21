import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tabelas } from 'src/app/Data/teste';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  tableTitle: string = "";
  contentOne: string = "";
  contentOneLeft: string = "";
  contentTwo: string = "";
  contentTwoLeft: string = "";
  contentThree: string = "";
  contentThreeLeft: string = "";
  contentFour: string = "";
  contentFourLeft: string = "";

  private id: string | null = "0";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id"))
    this.SetValuesTable(this.id)
  }

  SetValuesTable(id: string | null) {
    const result = tabelas.filter(
      table_area => table_area.id == id)[0]

    this.tableTitle = result.title
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
