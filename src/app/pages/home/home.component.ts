import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('name') name!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('phone') phone!:ElementRef;
  @ViewChild('message') message!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    window.open(`mailto:gabriel.brs.gsousa@gmail.com?subject=${'Preciso de ajuda'}&body=${encodeURIComponent(this.name.nativeElement.value+'\n'+'\n'+this.message.nativeElement.value+'\n'+'\n'+this.phone.nativeElement.value+'\n'+this.email.nativeElement.value+'\n'+'\n')}`);
    console.log(this.name.nativeElement.value)
    console.log(this.email.nativeElement.value)
    console.log(this.phone.nativeElement.value)
    console.log(this.message.nativeElement.value)
  }
}
