import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../../Data/insomnia';

@Component({
  selector: 'app-content-insomnia',
  templateUrl: './content-insomnia.component.html',
  styleUrls: ['./content-insomnia.component.css']
})
export class ContentInsomniaComponent implements OnInit {

  contentName: string = "";
  contentImg: string = "";
  descriptionImg: string = "";
  conteudo: string = "";

  private id: string | null = "0";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id"))
    this.setValuesToInsomnia(this.id)
  }

  setValuesToInsomnia(id: string | null) {
    const result = data.filter(
      insomnia_season => insomnia_season.id == id)[0]

    this.conteudo = result.conteudoItem
    this.contentName = result.name
    this.descriptionImg = result.descriptionImg
    this.contentImg = result.img
  }



}
