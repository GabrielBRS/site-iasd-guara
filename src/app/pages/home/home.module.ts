import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContatoModule } from '../contato/contato.module';
import { ProgramacoesModule } from '../programacoes/programacoes.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ContatoModule,
    ProgramacoesModule,
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
