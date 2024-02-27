import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEstudosFourComponent } from './page-estudos-four.component';
import { LinkBookEstudosModule } from '../link-book-estudos/link-book-estudos.module';



@NgModule({
  declarations: [
    PageEstudosFourComponent
  ],
  imports: [
    CommonModule,
    LinkBookEstudosModule,
  ],
  exports:[PageEstudosFourComponent]
})
export class PageEstudosFourModule { }
