import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBookEstudosComponent } from './link-book-estudos.component';



@NgModule({
  declarations: [LinkBookEstudosComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[LinkBookEstudosComponent]
})
export class LinkBookEstudosModule { }
