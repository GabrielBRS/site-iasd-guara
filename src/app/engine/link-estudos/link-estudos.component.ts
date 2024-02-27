import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-link-estudos',
  templateUrl: './link-estudos.component.html',
  styleUrls: ['./link-estudos.component.scss']
})
export class LinkEstudosComponent implements OnInit {

  numberSelect:any = 1;
  numberSelectBool1 = false;
  numberSelectBool2 = true;

  // linkPage:Array<any> = new Array(
  //   {page:'page1', index:1},
  //   {page:'page2', index:2},
  //   {page:'page3', index:3},
  // );

  constructor() { }

  ngOnInit(): void {
  }

  setNumberClick(number:any){
    this.numberSelect = number;
    // let numbera = this.linkPage.find((value,index)=>{this.dynamicPage(value,index)});
    // window.alert(JSON.stringify(numbera))
    if(this.numberSelect===0&&this.numberSelectBool1===false){
      this.numberSelect = 1
    }
    if(this.numberSelect>=2||this.numberSelect<=4){
      this.numberSelectBool1 = true;
      this.numberSelectBool2 = true;
    }
    if(this.numberSelect<=1){
      this.numberSelectBool1 = false;
      this.numberSelectBool2 = true;
    }
    if(this.numberSelect>=5){
      this.numberSelectBool1 = true;
      this.numberSelectBool2 = false;
    }
    if(this.numberSelect==='...'){
      this.numberSelect = 5;
    }

  }

  // dynamicPage(value:any, index:any){
  //   index = (index+1)*2;
  //   let newArray = JSON.stringify(value.page + " " + index);
  //   // window.alert(JSON.stringify(value.page + " " + index))
  //   return newArray;
  //   // return new Array({'index':index, 'page':value});
  // }

}
