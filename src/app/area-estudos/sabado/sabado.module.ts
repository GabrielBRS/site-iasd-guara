import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabadoComponent } from './sabado.component';



@NgModule({
  declarations: [SabadoComponent],
  imports: [
    CommonModule
  ],
  exports:[SabadoComponent]
})
export class SabadoModule { }
