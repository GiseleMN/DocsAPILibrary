import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insomnia-season',
  templateUrl: './insomnia-season.component.html',
  styleUrls: ['./insomnia-season.component.css']
})
export class InsomniaSeasonComponent implements OnInit {

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
