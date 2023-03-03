import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudosComponent } from './estudos.component';



@NgModule({
  declarations: [
    EstudosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[EstudosComponent]
})
export class EstudosModule { }
