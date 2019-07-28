import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'param-input-slot',
  templateUrl: './param-input-slot.component.html',
  styleUrls: ['./param-input-slot.component.css']
})
export class ParamInputSlotComponent implements OnInit {
  @Input() min;
  @Input() max;
  @Input() title;
  @Input() type="";

  value

  constructor() { }

  ngOnInit() {

    this.value = Math.floor((this.max+this.min)/2);
  }

}
