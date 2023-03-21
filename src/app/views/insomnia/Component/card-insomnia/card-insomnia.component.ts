import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-insomnia',
  templateUrl: './card-insomnia.component.html',
  styleUrls: ['./card-insomnia.component.css']
})
export class CardInsomniaComponent implements OnInit {

  @Input()
  id: string | null = "";
  @Input()
  contentName: string = "";
  @Input()
  contentImg: string = "";
  @Input()
  contDescriptionImg: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
