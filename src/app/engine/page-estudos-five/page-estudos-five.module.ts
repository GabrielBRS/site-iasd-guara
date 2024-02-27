import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEstudosFiveComponent } from './page-estudos-five.component';
import { LinkBookEstudosModule } from '../link-book-estudos/link-book-estudos.module';



@NgModule({
  declarations: [
    PageEstudosFiveComponent
  ],
  imports: [
    CommonModule,
    LinkBookEstudosModule,
  ],
  exports:[PageEstudosFiveComponent]
})
export class PageEstudosFiveModule { }
