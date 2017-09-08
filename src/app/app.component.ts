import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {



  dsbFlag = false;
  title = 'app';

  disableFieldset(){
    this.dsbFlag = true;
  }
}
