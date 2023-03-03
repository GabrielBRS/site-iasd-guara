import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEstudosTwoComponent } from './page-estudos-two.component';
import { LinkBookEstudosModule } from '../link-book-estudos/link-book-estudos.module';



@NgModule({
  declarations: [
    PageEstudosTwoComponent
  ],
  imports: [
    CommonModule,
    LinkBookEstudosModule,
  ]
})
export class PageEstudosTwoModule { }
