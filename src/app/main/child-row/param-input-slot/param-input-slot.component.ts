import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'param-input-slot',
  templateUrl: './param-input-slot.component.html',
  styleUrls: ['./param-input-slot.component.css']
})
export class ParamInputSlotComponent implements OnInit {
  @Input() min;
  @Input() max;
  @Input() step = 1;
  @Input() title;
  @Input() type = "";

  @Input() @Output() value;

  constructor() { }

  ngOnInit() {

    // this.value = Math.floor((this.max+this.min)/2);
  }

  onChange(e) {
    //this.value = e.currentTarget.valueAsNumber;
  }

}
