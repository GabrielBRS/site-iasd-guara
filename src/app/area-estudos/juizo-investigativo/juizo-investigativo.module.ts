import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuizoInvestigativoComponent } from './juizo-investigativo.component';



@NgModule({
  declarations: [
    JuizoInvestigativoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[JuizoInvestigativoComponent]
})
export class JuizoInvestigativoModule { }
