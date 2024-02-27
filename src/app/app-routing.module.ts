import { DizimosOfertasDetailsComponent } from './pages/dizimos-ofertas-details/dizimos-ofertas-details.component';
import { ProgramacoesComponent } from './pages/programacoes/programacoes.component';
import { EstudosComponent } from './pages/estudos/estudos.component';
import { BibliotecaVirtualComponent } from './pages/biblioteca-virtual/biblioteca-virtual.component';
import { ConstrucaoIgrejaComponent } from './pages/construcao-igreja/construcao-igreja.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { DizimosComponent } from './pages/dizimos/dizimos.component';
import { DizimoComponent as DizimoPageComponent } from './area-estudos/dizimo/dizimo.component';
import { DizimosOfertasComponent } from './pages/dizimos-ofertas/dizimos-ofertas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppComponent } from './app.component';
import { DizimosOfertasAuxComponent } from './pages/dizimos-ofertas-aux/dizimos-ofertas-aux.component';
import { BooksCategoryEstudosComponent } from './pages/books-category-estudos/books-category-estudos.component';
import { BibliotecaVirtualDetailsComponent } from './pages/biblioteca-virtual-details/biblioteca-virtual-details.component';
import { SabadoComponent } from './area-estudos/sabado/sabado.component';
import { LinkEstudosComponent } from './engine/link-estudos/link-estudos.component';
import { EstudosDetailsComponent } from './pages/estudos-details/estudos-details.component';
import { PageEstudosOneComponent } from './engine/page-estudos-one/page-estudos-one.component';
import { PageEstudosTwoComponent } from './engine/page-estudos-two/page-estudos-two.component';
import { JuizoInvestigativoComponent } from './area-estudos/juizo-investigativo/juizo-investigativo.component';
import { PageEstudosThreeComponent } from './engine/page-estudos-three/page-estudos-three.component';
import { PageEstudosFiveComponent } from './engine/page-estudos-five/page-estudos-five.component';
import { PageEstudosFourComponent } from './engine/page-estudos-four/page-estudos-four.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';


let dynamicRoutes = ['1','2','3','4','5'];

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'programacoes',component:ProgramacoesComponent},
  {path:'estudos',component:EstudosComponent, children:[
    {path: '', redirectTo: 'page', pathMatch: 'full'},
    {path:'page', component:EstudosDetailsComponent, children:[
      {path: '', redirectTo: dynamicRoutes[0], pathMatch: 'full'},
      {path:dynamicRoutes[0], component:PageEstudosOneComponent},
      {path:dynamicRoutes[1], component:PageEstudosTwoComponent},
      {path:dynamicRoutes[2], component:PageEstudosThreeComponent},
      {path:dynamicRoutes[3], component:PageEstudosFourComponent},
      {path:dynamicRoutes[4], component:PageEstudosFiveComponent},
      {path:'last', component:PageEstudosFiveComponent},
    ]},
    {path:'', component:LinkEstudosComponent, outlet: 'index-page'},
    {path:'sabado', component:SabadoComponent},
    {path:'dizimo', component:DizimoPageComponent},
    {path:'juizo-investigativo', component:JuizoInvestigativoComponent},
  ]},
  {path:'ofertas', component:DizimosOfertasComponent},
  {path:'ofertas/open', component:DizimosOfertasDetailsComponent, children:[
    // {path: '', redirectTo: 'dizimos', pathMatch: 'full'},
    {path:'dizimos', component:DizimosComponent,},
    {path:'ofertas', component:OfertasComponent,},
    {path:'construcao-igreja', component:ConstrucaoIgrejaComponent,},
    {path:'', component:DizimosOfertasAuxComponent, outlet: 'aux'},
  ]},
  {path:'biblioteca-virtual',component:BibliotecaVirtualComponent, children:[
    {path:'', component:BooksCategoryEstudosComponent, outlet: 'estudos'},
  ]},
  {path:'biblioteca-virtual/open',component:BibliotecaVirtualDetailsComponent, children:[
    {path:'estudos', component:BooksCategoryEstudosComponent},
    // {path:'sabado', component:BooksCategoryEstudosComponent},
    // {path:'biblia', component:BooksCategoryEstudosComponent},
  ]},
  {path:'contato', component:ContatoComponent},
  {path:'**', component:PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  setRoute(routeDynamic:string[]){
    dynamicRoutes = routeDynamic;
  }
}
