import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-swagger-season',
  templateUrl: './swagger-seasons.component.html',
  styleUrls: ['./swagger-seasons.component.css']
})
export class SwaggerSeasonsComponent implements OnInit {


  @Input()
  id: string | null = "";
  @Input()
  contentImg: string = "";
  @Input()
  contentName: string = "";
  @Input()
  descriptionImg: string = "";


  constructor() { }

  ngOnInit(): void {

  }

}
