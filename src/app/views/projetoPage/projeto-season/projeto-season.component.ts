import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projeto-season',
  templateUrl: './projeto-season.component.html',
  styleUrls: ['./projeto-season.component.css']
})
export class ProjetoSeasonComponent implements OnInit {

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
