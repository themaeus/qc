import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { QuestoesComponent } from './componentes/questoes/questoes.component';
import { ServiceComponent } from './componentes/service/service.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ContatoComponent } from './componentes/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    QuestoesComponent,
    ServiceComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
