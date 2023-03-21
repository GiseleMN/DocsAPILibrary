import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { InsomniaComponent } from './views/insomnia/insomnia.component';
import { ProjetoComponent } from './views/projeto/projeto.component';
import { SwaggerComponent } from './views/swagger/swagger.component';
import { TestesComponent } from './views/testes/testes.component';

//import { ContentComponent } from './views/projeto/Component/content/content.component';
import { ContentSwaggerComponent } from './views/swagger/Component/content-swagger/content-swagger.component';
import { ContentInsomniaComponent } from './views/insomnia/Component/content-insomnia/content-insomnia.component';
import { ConteudoComponent } from './views/testes/Component/conteudo/conteudo.component';
import { ContentProjetoComponent } from './views/projeto/Component/content-projeto/content-projeto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insomnia', component: InsomniaComponent },
  { path: 'insomnia/content-insomnia/:id', component: ContentInsomniaComponent },
  { path: 'swagger', component: SwaggerComponent },
  { path: 'swagger/content-swagger/:id', component: ContentSwaggerComponent },
  { path: 'projeto', component: ProjetoComponent },
  { path: 'projeto/content-projeto/:id', component: ContentProjetoComponent },
  { path: 'testes', component: TestesComponent },
  { path: 'conteudo/:id', component: ConteudoComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
