import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ConteudoComponent } from "./Component/conteudo/conteudo.component";
import { TabelaContentComponent } from "./Component/tabela-content/tabela-content.component";
import { TabelaRequisitosComponent } from "./Component/tabela-requisitos/tabela-requisitos.component";
import { TestesComponent } from "./testes.component";
import { ConteudoItensFiveComponent } from './Component/conteudo-itens-five/conteudo-itens-five.component';
import { ConteudoItensFourComponent } from './Component/conteudo-itens-four/conteudo-itens-four.component';
import { ConteudoItensEightComponent } from './Component/conteudo-itens-eight/conteudo-itens-eight.component';
import { TabelaCronogramaComponent } from './Component/tabela-cronograma/tabela-cronograma.component';
import { DocControleComponent } from './Component/doc-controle/doc-controle.component';
import { TabelaControleComponent } from './Component/tabela-controle/tabela-controle.component';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TabelaContentComponent,
        TabelaRequisitosComponent,
        ConteudoComponent,
        TestesComponent,
        ConteudoItensFiveComponent,
        ConteudoItensFourComponent,
        ConteudoItensEightComponent,
        TabelaCronogramaComponent,
        DocControleComponent,
        TabelaControleComponent,
    ],
    exports: [
        TestesComponent,
        TabelaContentComponent,
        TabelaRequisitosComponent,
        ConteudoComponent,
    ]

})

export class TesteModule { }