import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  @ViewChild('name') name!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('phone') phone!:ElementRef;
  @ViewChild('titulo') titulo!:ElementRef;
  @ViewChild('message') message!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    window.open(`mailto:gabriel.brs.gsousa@gmail.com?subject=${this.titulo.nativeElement.value}&body=${encodeURIComponent(this.name.nativeElement.value+'\n'+'\n'+this.message.nativeElement.value+'\n'+'\n'+this.phone.nativeElement.value+'\n'+this.email.nativeElement.value+'\n'+'\n')}`);
    console.log(this.name.nativeElement.value)
    console.log(this.email.nativeElement.value)
    console.log(this.phone.nativeElement.value)
    console.log(this.message.nativeElement.value)
  }

}
