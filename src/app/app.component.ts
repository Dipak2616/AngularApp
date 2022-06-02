import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AngularApp';
  textColor:string = "black";

  changeColor(color:string):void{
    this.textColor = color;
  }

}
