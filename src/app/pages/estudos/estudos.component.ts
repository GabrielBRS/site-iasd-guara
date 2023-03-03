import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.scss']
})
export class EstudosComponent implements OnInit {
  // dateTime:Date = new Date();
  dateNowDay:any;
  dateNowMes:any;
  dateNowAno:any;
  dateNowHoras:any;
  dateNowMinutos:any;
  dateNowSegundos:any;

  constructor() {

   }

  ngOnInit(): void {
    this.setTempo();
    setInterval(()=>{
      this.setTempo();
    },500);
  }

  setTempo(){
    let dateTime = new Date();
    this.dateNowDay = dateTime.getDate();
    this.dateNowMes = dateTime.getDay();
    this.dateNowAno = dateTime.getFullYear();
    this.dateNowHoras = dateTime.getHours();
    this.dateNowMinutos = dateTime.getMinutes();
    this.dateNowSegundos = dateTime.getUTCSeconds();
  }

}
