import { Component, Input, OnInit } from '@angular/core';
import { xUnit } from '../../teste-xunit';

@Component({
  selector: 'app-xunit',
  templateUrl: './conten.component.html',
  styleUrls: ['./conten.component.css']
})
export class ContenComponent implements OnInit {

  @Input() id: string | null = '';
  img: string = '';
  conteudo: string = '';
  alt: string = '';

  constructor() { }

  ngOnInit(): void {
    xUnit.map(
      value => value.id == this.id)
    this.setValueXUnit(this.id)
  }
  setValueXUnit(id: string | null) {
    const result = xUnit.filter(
      content_xunit => content_xunit.id == id)[0]

    this.img = result.img
    this.conteudo = result.conteudo
    this.alt = result.alt
  }

}
