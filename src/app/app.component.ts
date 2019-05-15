import { Component } from '@angular/core';

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7';
  type="Easy";
  score=100;

displayMessage=function(){
  //alert("current Score:" + this.score);
  this.score=this.score;
  return this.score;
}

}
