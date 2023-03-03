import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() title:any;
  @Input() description:any;
  @Input() author:any;
  @Input() download:any;

  constructor() { }

  ngOnInit(): void {
  }

}
