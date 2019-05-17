import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  submitDetail=function(hf){
    console.log(hf);
    //json object we need to stringfy to display it in console
    console.log("Form Value:" + JSON.stringify(hf.value));
    console.log("Form Valid Status:"+  hf.valid);
    console.log("Form InValid Status:"+  hf.invalid);
    console.log("Form Status:"+  hf.status);
  }
  constructor() { }

  ngOnInit() {
  }

}
