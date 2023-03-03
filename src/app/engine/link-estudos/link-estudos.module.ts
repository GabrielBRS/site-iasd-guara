import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkEstudosComponent } from './link-estudos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LinkEstudosComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[LinkEstudosComponent]
})
export class LinkEstudosModule { }
