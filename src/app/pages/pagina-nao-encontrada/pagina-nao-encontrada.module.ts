import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';



@NgModule({
  declarations: [
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PaginaNaoEncontradaComponent]
})
export class PaginaNaoEncontradaModule { }
