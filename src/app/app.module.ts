import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { ProjetoComponent } from './views/projetoPage/projeto/projeto.component';
import { SwaggerComponent } from './views/swaggerPage/swagger/swagger.component';
import { InsomniaComponent } from './views/insomniaPage/insomnia/insomnia.component';
import { HomeComponent } from './views/home/home.component';
import { SwaggerSeasonsComponent } from './views/swaggerPage/swagger-seasons/swagger-seasons.component';
import { ProjetoSeasonComponent } from './views/projetoPage/projeto-season/projeto-season.component';
import { InsomniaSeasonComponent } from './views/insomniaPage/insomnia-season/insomnia-season.component';
import { ContentComponent } from './componente/content/content.component';
import { BackgroundComponent } from './componente/background/background.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjetoComponent,
    SwaggerComponent,
    InsomniaComponent,
    SwaggerSeasonsComponent,
    ProjetoSeasonComponent,
    InsomniaSeasonComponent,
    ContentComponent,
    BackgroundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
