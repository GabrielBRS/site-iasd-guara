import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-book-estudos',
  templateUrl: './link-book-estudos.component.html',
  styleUrls: ['./link-book-estudos.component.scss']
})
export class LinkBookEstudosComponent implements OnInit {

  @Input() titulo:any;
  @Input() autor:any;
  @Input() descricao:any;
  @Input() link:any;
  @Input() img:any;
  @Input() imgDescricao:any;

  constructor() { }

  ngOnInit(): void {
  }

}
