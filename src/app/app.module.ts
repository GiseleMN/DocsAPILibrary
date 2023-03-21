import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componente/header/header.component';
import { HomeComponent } from './views/home/home.component';

import { CardInsomniaComponent } from './views/insomnia/Component/card-insomnia/card-insomnia.component';
import { ContentInsomniaComponent } from './views/insomnia/Component/content-insomnia/content-insomnia.component';
import { InsomniaComponent } from './views/insomnia/insomnia.component';

import { CardProjetoComponent } from './views/projeto/Component/card-projeto/card-projeto.component';
import { ContentProjetoComponent } from './views/projeto/Component/content-projeto/content-projeto.component';
import { ProjetoComponent } from './views/projeto/projeto.component';

import { CardSwaggerComponent } from './views/swagger/Component/card-swagger/card-swagger.component';
import { ContentSwaggerComponent } from './views/swagger/Component/content-swagger/content-swagger.component';
import { SwaggerComponent } from './views/swagger/swagger.component';

import { ContentTesteComponent } from './views/testes/Component/content-teste/content-teste.component';
import { ConteudoComponent } from './views/testes/Component/conteudo/conteudo.component';
import { TabelaComponent } from './views/testes/Component/tabela/tabela.component';
import { TestesComponent } from './views/testes/testes.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

    SwaggerComponent,
    CardSwaggerComponent,
    ContentSwaggerComponent,

    InsomniaComponent,
    ContentInsomniaComponent,
    CardInsomniaComponent,

    ProjetoComponent,
    CardProjetoComponent,
    ContentProjetoComponent,

    ContentTesteComponent,
    TabelaComponent,
    ConteudoComponent,
    TestesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
