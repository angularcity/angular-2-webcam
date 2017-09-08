import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-fieldset',
  templateUrl: './my-fieldset.component.html',
  styleUrls: ['./my-fieldset.component.css']
})
export class MyFieldsetComponent implements OnInit, OnChanges {

  @Input() dsbFlag;

  constructor() { }

  ngOnInit() {
    console.log(this.dsbFlag)
  }
  ngOnChanges(changes: SimpleChanges) {

    console.log('Onchanges')
    console.log(this.dsbFlag)
  }

}
