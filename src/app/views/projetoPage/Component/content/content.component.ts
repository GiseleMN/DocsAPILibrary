import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../../Data/projeto';

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

  }
  setValuesToProjeto(id: string | null) {
    const projetoResult = data.filter(
      article => article.id == id)[0]

    this.conteudo = projetoResult.conteudoItem
    this.contentName = projetoResult.name
    this.contentImg = projetoResult.img
    this.descriptionImg = projetoResult.descriptionImg
  }




}
