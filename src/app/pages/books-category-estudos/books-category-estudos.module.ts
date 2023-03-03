import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksCategoryEstudosComponent } from './books-category-estudos.component';
import { BookModule } from 'src/app/engine/book/book.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BooksCategoryEstudosComponent
  ],
  imports: [
    CommonModule,
    BookModule,
    RouterModule,
  ],
  exports:[BooksCategoryEstudosComponent]
})
export class BooksCategoryEstudosModule { }
