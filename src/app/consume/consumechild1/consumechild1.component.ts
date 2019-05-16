import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {

  allbanks:any
  constructor(private local:LocalService) {
    console.log("1") ;
  }

  ngOnInit() {
    console.log("2");
    this.accessLocalService()    
  }
  accessLocalService=function(){
      console.log(this.local.myPI);       
      this.allbanks=this.local.addBank();      
  }

}
