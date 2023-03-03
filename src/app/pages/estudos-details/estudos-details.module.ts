import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudosDetailsComponent } from './estudos-details.component';
import { CardLinkEstudosModule } from 'src/app/components/card-link-estudos/card-link-estudos.module';



@NgModule({
  declarations: [
    EstudosDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardLinkEstudosModule,
  ],
  exports:[EstudosDetailsComponent
  ]
})
export class EstudosDetailsModule { }
