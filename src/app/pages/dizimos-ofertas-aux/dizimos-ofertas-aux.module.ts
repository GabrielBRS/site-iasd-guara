import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DizimosOfertasAuxComponent } from "./dizimos-ofertas-aux.component";




@NgModule({
  declarations: [
    DizimosOfertasAuxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[DizimosOfertasAuxComponent]
})
export class DizimosOfertasAuxModule { }
