import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-row',
  templateUrl: './child-row.component.html',
  styleUrls: ['./child-row.component.css']
})
export class ChildRowComponent implements OnInit {
  @Input() data;
  @Input() showAddButn:boolean;
  @Output() add = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  addClick() {
    this.add.emit(true);
  }

  removeClick() {
    this.add.emit(false);
  }
}
