import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkEstudosComponent } from './card-link-estudos.component';



@NgModule({
  declarations: [CardLinkEstudosComponent],
  imports: [
    CommonModule
  ],
  exports:[CardLinkEstudosComponent]
})
export class CardLinkEstudosModule { }
