import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './componente/content/content.component';
import { HeaderComponent } from './componente/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { InsomniaComponent } from './views/insomniaPage/insomnia/insomnia.component';
import { ProjetoComponent } from './views/projetoPage/projeto/projeto.component';
import { SwaggerComponent } from './views/swaggerPage/swagger/swagger.component';
import { TestesComponent } from './views/testes/testes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'insomnia', component: InsomniaComponent },
  { path: 'swagger', component: SwaggerComponent },
  { path: 'projeto', component: ProjetoComponent },
  { path: 'testes', component: TestesComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
