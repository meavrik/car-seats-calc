import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-row',
  templateUrl: './child-row.component.html',
  styleUrls: ['./child-row.component.css']
})
export class ChildRowComponent implements OnInit {
  @Input() data;
  @Input() lastOne:boolean;
  @Output() add = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addClick() {
    this.add.emit();
  }
}
