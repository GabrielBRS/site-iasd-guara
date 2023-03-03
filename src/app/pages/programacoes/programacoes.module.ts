import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramacoesComponent } from './programacoes.component';



@NgModule({
  declarations: [
    ProgramacoesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ProgramacoesComponent]
})
export class ProgramacoesModule { }
