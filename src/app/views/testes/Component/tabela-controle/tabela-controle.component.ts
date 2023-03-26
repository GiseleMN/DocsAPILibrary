import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tb-controle',
  templateUrl: './tabela-controle.component.html',
  styleUrls: ['./tabela-controle.component.css']
})
export class TabelaControleComponent implements OnInit {

  tb_titulo: string[] = ['Teste', 'Data', 'Ação', 'Resultados Esperados', 'Resultados Obtidos', 'Aprovado (sim/não)']
  itemOne: string[] = ['1 - teste', '15/03/2023', 'criar um usuário inválido ', 'retornar não autorizado', 'sucesso'];
  itemTwo: string[] = ['2 - teste', '15/03/2023', 'criar um usuário, realizar o login fazendo uso do jwtBeare', 'retorno do token com sucesso', 'sucesso'];


  constructor() { }

  ngOnInit(): void {
  }

}
