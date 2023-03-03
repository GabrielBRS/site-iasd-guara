import { DizimosOfertasModule } from './../dizimos-ofertas/dizimos-ofertas.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DizimosOfertasDetailsComponent } from './dizimos-ofertas-details.component';
import { PageEstudosOneModule } from 'src/app/engine/page-estudos-one/page-estudos-one.module';
import { PageEstudosTwoModule } from 'src/app/engine/page-estudos-two/page-estudos-two.module';



@NgModule({
  declarations: [
    DizimosOfertasDetailsComponent
  ],
  imports: [
    CommonModule,
    DizimosOfertasModule,
    RouterModule,
    PageEstudosOneModule,
    PageEstudosTwoModule,
  ],
  exports:[DizimosOfertasDetailsComponent]
})
export class DizimosOfertasDetailsModule { }
