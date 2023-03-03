import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DizimosComponent } from './dizimos.component';



@NgModule({
  declarations: [
    DizimosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DizimosComponent]
})
export class DizimosModule { }
