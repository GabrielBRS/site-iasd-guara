import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DizimosOfertasComponent } from './dizimos-ofertas.component';



@NgModule({
  declarations: [
    DizimosOfertasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[DizimosOfertasComponent]
})
export class DizimosOfertasModule { }
