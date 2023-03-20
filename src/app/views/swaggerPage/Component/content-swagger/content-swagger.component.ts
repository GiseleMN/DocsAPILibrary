import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/Data/swagger';

@Component({
  selector: 'app-content-swagger',
  templateUrl: './content-swagger.component.html',
  styleUrls: ['./content-swagger.component.css']
})
export class ContentSwaggerComponent implements OnInit {

  contentName: string = "";
  contentImg: string = "";
  descriptionImg: string = "";
  conteudo: string = "";

  private id: string | null = "0";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id"))
    this.setValuesToSwagger(this.id)
  }

  setValuesToSwagger(id: string | null) {
    const swaggerResult = data.filter(
      season_swagger => season_swagger.id == id)[0]

    this.contentName = swaggerResult.name
    this.contentImg = swaggerResult.img
    this.conteudo = swaggerResult.conteudoItem
    this.descriptionImg = swaggerResult.descriptionImg

  }


}
