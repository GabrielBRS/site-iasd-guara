import { LinkBookEstudosModule } from './../link-book-estudos/link-book-estudos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEstudosOneComponent } from './page-estudos-one.component';




@NgModule({
  declarations: [PageEstudosOneComponent],
  imports: [
    CommonModule,
    LinkBookEstudosModule,
  ],
  exports:[PageEstudosOneComponent]
})
export class PageEstudosOneModule { }
