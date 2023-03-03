import { LinkEstudosModule } from './engine/link-estudos/link-estudos.module';
import { EstudosModule } from './pages/estudos/estudos.module';
import { BibliotecaVirtualModule } from './pages/biblioteca-virtual/biblioteca-virtual.module';
import { BookModule } from './engine/book/book.module';
import { PaginaNaoEncontradaModule } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.module';
import { DizimosOfertasModule } from './pages/dizimos-ofertas/dizimos-ofertas.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DizimosOfertasDetailsModule } from './pages/dizimos-ofertas-details/dizimos-ofertas-details.module';
import { DizimosOfertasAuxModule } from './pages/dizimos-ofertas-aux/dizimos-ofertas-aux.module';
import { BibliotecaVirtualDetailsModule } from './pages/biblioteca-virtual-details/biblioteca-virtual-details.module';
import { EstudosDetailsModule } from './pages/estudos-details/estudos-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    DizimosOfertasModule,
    DizimosOfertasAuxModule,
    DizimosOfertasDetailsModule,
    BibliotecaVirtualModule,
    BibliotecaVirtualDetailsModule,
    EstudosModule,
    LinkEstudosModule,
    EstudosDetailsModule,
    PaginaNaoEncontradaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
