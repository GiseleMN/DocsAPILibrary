import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from './data';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  title: string = "";
  itemOne: string = "";
  itemTwo: string = "";

  private id: string | null = "";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id"))
    this.setValueTeste(this.id);
  }
  setValueTeste(id: string | null) {
    const resultado = data.filter(
      conteudo_teste => conteudo_teste.id == id)[0]

    this.title = resultado.title
    this.itemOne = resultado.itemOne
    this.itemTwo = resultado.itemTwo
  }



}
