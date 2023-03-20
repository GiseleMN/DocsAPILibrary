import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { InsomniaComponent } from './views/insomniaPage/insomnia/insomnia.component';
import { ProjetoComponent } from './views/projetoPage/projeto/projeto.component';
import { SwaggerComponent } from './views/swaggerPage/swagger/swagger.component';
import { TestesComponent } from './views/testes/testes.component';

import { ContentComponent } from './views/projetoPage/Component/content/content.component';
import { ContentSwaggerComponent } from './views/swaggerPage/Component/content-swagger/content-swagger.component';
import { ContentInsomniaComponent } from './views/insomniaPage/Component/content-insomnia/content-insomnia.component';
import { ConteudoComponent } from './views/testes/Component/conteudo/conteudo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insomnia', component: InsomniaComponent },
  { path: 'content-insomnia/:id', component: ContentInsomniaComponent },
  { path: 'swagger', component: SwaggerComponent },
  { path: 'content-swagger/:id', component: ContentSwaggerComponent },
  { path: 'projeto', component: ProjetoComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: 'testes', component: TestesComponent },
  { path: 'conteudo/:id', component: ConteudoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
