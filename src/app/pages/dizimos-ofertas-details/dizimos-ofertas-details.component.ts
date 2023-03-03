import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dizimos-ofertas-details',
  templateUrl: './dizimos-ofertas-details.component.html',
  styleUrls: ['./dizimos-ofertas-details.component.scss']
})
export class DizimosOfertasDetailsComponent implements OnInit {

  showOptions:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setContribuicao(){
    this.showOptions = !this.showOptions;
  }

}
