import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment84';
  textData = "";
  public fun(event){
   this.textData =((<HTMLInputElement>event.target).value);
  }
}
