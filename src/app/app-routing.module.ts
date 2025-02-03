import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestoesComponent } from './componentes/questoes/questoes.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ContatoComponent } from './componentes/contato/contato.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'questoes',
    pathMatch: 'full',
  },
  {
    path: 'questoes',
    component: QuestoesComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
