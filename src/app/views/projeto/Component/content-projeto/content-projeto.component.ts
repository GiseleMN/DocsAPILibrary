import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../../Data/projeto';

@Component({
  selector: 'app-content-projeto',
  templateUrl: './content-projeto.component.html',
  styleUrls: ['./content-projeto.component.css']
})
export class ContentProjetoComponent implements OnInit {

  contentName: string = "";
  contentImg: string = "";
  descriptionImg: string = "";
  conteudo: string = "";

  private id: string | null = "0";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToProjeto(this.id)

  }
  setValuesToProjeto(id: string | null) {
    const projetoResult = data.filter(
      season_projeto => season_projeto.id == id)[0]

    this.conteudo = projetoResult.conteudoItem
    this.contentName = projetoResult.name
    this.contentImg = projetoResult.img
    this.descriptionImg = projetoResult.descriptionImg
  }




}
