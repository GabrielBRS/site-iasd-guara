import { BooksCategoryEstudosModule } from './../books-category-estudos/books-category-estudos.module';
import { RouterModule } from '@angular/router';
import { BookModule } from './../../engine/book/book.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaVirtualComponent } from './biblioteca-virtual.component';



@NgModule({
  declarations: [
    BibliotecaVirtualComponent
  ],
  imports: [
    CommonModule,
    BookModule,
    RouterModule,
    BooksCategoryEstudosModule,
  ],
  exports:[BibliotecaVirtualComponent]
})
export class BibliotecaVirtualModule { }
