import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  templateUrl: './card-projeto.component.html',
  styleUrls: ['./card-projeto.component.css']
})
export class CardProjetoComponent implements OnInit {

  @Input()
  id: string | null = "";
  @Input()
  contentImg: string = "";
  @Input()
  contentName: string = "";
  @Input()
  descriptionImg: string = "";
  // @Input()
  // contentName2: string = "";
  // @Input()
  // contentImg2: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
