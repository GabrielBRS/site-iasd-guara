import { BooksCategoryEstudosModule } from '../books-category-estudos/books-category-estudos.module';
import { RouterModule } from '@angular/router';
import { BookModule } from '../../engine/book/book.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaVirtualDetailsComponent } from './biblioteca-virtual-details.component';



@NgModule({
  declarations: [
    BibliotecaVirtualDetailsComponent
  ],
  imports: [
    CommonModule,
    BookModule,
    RouterModule,
    BooksCategoryEstudosModule,
  ],
  exports:[BibliotecaVirtualDetailsComponent]
})
export class BibliotecaVirtualDetailsModule { }
