import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEstudosThreeComponent } from './page-estudos-three.component';
import { LinkBookEstudosModule } from '../link-book-estudos/link-book-estudos.module';



@NgModule({
  declarations: [
    PageEstudosThreeComponent
  ],
  imports: [
    CommonModule,
    LinkBookEstudosModule,
  ],
  exports:[PageEstudosThreeComponent]
})
export class PageEstudosThreeModule { }
