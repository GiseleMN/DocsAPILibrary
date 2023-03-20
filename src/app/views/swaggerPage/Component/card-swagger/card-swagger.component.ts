import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-swagger',
  templateUrl: './card-swagger.component.html',
  styleUrls: ['./card-swagger.component.css']
})
export class CardSwaggerComponent implements OnInit {


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
