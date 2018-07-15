import { Component } from '@angular/core';


//custme decorator

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  twoWayData = "";

  updateValue(e)
  {
    this.twoWayData=e.target.value;
    console.log(e.target.value);
  }

}
