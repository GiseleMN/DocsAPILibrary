import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../Data/projeto';
import { swagger } from 'src/app/Data/swagger';
import { insomnia } from '../../Data/insomnia';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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
    this.setValuesToSwagger(this.id)
    this.setValuesToInsomnia(this.id)
  }
  setValuesToProjeto(id: string | null) {
    const projetoResult = data.filter(
      article => article.id == id)[0]

    this.conteudo = projetoResult.conteudoItem
    this.contentName = projetoResult.name
    this.contentImg = projetoResult.img
    this.descriptionImg = projetoResult.descriptionImg
  }
  setValuesToSwagger(id: string | null) {
    const swaggerResult = swagger.filter(
      season_swagger => season_swagger.id == id)[0]

    this.contentName = swaggerResult.name
    this.contentImg = swaggerResult.img
    this.conteudo = swaggerResult.conteudoItem
    this.descriptionImg = swaggerResult.descriptionImg

  }
  setValuesToInsomnia(id: string | null) {
    const result = insomnia.filter(
      insomnia_season => insomnia_season.id == id)[0]

    this.conteudo = result.conteudoItem
    this.contentName = result.name
    this.descriptionImg = result.descriptionImg
    this.contentImg = result.img
  }


}
