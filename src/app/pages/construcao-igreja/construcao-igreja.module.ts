import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstrucaoIgrejaComponent } from './construcao-igreja.component';



@NgModule({
  declarations: [
    ConstrucaoIgrejaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ConstrucaoIgrejaComponent]
})
export class ConstrucaoIgrejaModule { }
