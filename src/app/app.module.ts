import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './componente/background/background.component';
import { HeaderComponent } from './componente/header/header.component';

import { ProjetoComponent } from './views/projetoPage/projeto/projeto.component';
import { SwaggerComponent } from './views/swaggerPage/swagger/swagger.component';
import { InsomniaComponent } from './views/insomniaPage/insomnia/insomnia.component';
import { HomeComponent } from './views/home/home.component';
import { TestesComponent } from './views/testes/testes.component';

import { ContentComponent } from './views/projetoPage/Component/content/content.component';
import { CardInsomniaComponent } from './views/insomniaPage/Component/card-insomnia/card-insomnia.component';
import { CardProjetoComponent } from './views/projetoPage/Component/card-projeto/card-projeto.component';
import { CardSwaggerComponent } from './views/swaggerPage/Component/card-swagger/card-swagger.component';
import { ContentSwaggerComponent } from './views/swaggerPage/Component/content-swagger/content-swagger.component';
import { ContentInsomniaComponent } from './views/insomniaPage/Component/content-insomnia/content-insomnia.component';
import { ContentTesteComponent } from './views/testes/Component/content-teste/content-teste.component';

import { TabelaComponent } from './views/testes/Component/tabela/tabela.component';
import { ConteudoComponent } from './views/testes/Component/conteudo/conteudo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjetoComponent,
    SwaggerComponent,
    InsomniaComponent,
    TestesComponent,
    BackgroundComponent,
    ContentComponent,
    CardSwaggerComponent,
    CardProjetoComponent,
    CardInsomniaComponent,
    ContentSwaggerComponent,
    ContentInsomniaComponent,
    ContentTesteComponent,
    TabelaComponent,
    ConteudoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
