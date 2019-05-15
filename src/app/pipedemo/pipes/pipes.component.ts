import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

money=88;
name="Angular Tutorial";
birthday= new Date();
  constructor() { }

  ngOnInit() {
  }

}
