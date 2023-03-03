import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DizimoComponent } from './dizimo.component';



@NgModule({
  declarations: [
    DizimoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DizimoComponent]
})
export class DizimoModule { }
