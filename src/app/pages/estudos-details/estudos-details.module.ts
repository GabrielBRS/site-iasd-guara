import { PageEstudosOneModule } from './../../engine/page-estudos-one/page-estudos-one.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudosDetailsComponent } from './estudos-details.component';
import { CardLinkEstudosModule } from 'src/app/components/card-link-estudos/card-link-estudos.module';
import { PageEstudosTwoModule } from 'src/app/engine/page-estudos-two/page-estudos-two.module';
import { PageEstudosThreeModule } from 'src/app/engine/page-estudos-three/page-estudos-three.module';
import { PageEstudosFourModule } from 'src/app/engine/page-estudos-four/page-estudos-four.module';
import { PageEstudosFiveModule } from 'src/app/engine/page-estudos-five/page-estudos-five.module';



@NgModule({
  declarations: [
    EstudosDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardLinkEstudosModule,
    PageEstudosOneModule,
    PageEstudosTwoModule,
    PageEstudosThreeModule,
    PageEstudosFourModule,
    PageEstudosFiveModule,
  ],
  exports:[EstudosDetailsComponent
  ]
})
export class EstudosDetailsModule { }
