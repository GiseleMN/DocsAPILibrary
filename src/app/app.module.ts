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

import { TesteModule } from './views/testes/teste.module';
import { TesteXUnitComponent } from './views/teste-xunit/teste-xunit.component';
import { RenderLiComponent } from './views/projeto/Component/render-li/render-li.component';
import { ContenComponent } from './views/teste-xunit/Component/conten/conten.component';




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
    TesteXUnitComponent,
    RenderLiComponent,
    ContenComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TesteModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
