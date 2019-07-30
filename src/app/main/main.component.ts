import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  children = [];

  constructor() {

  }

  ngOnInit() {
    this.addNewChild();
  }

  onAddNewChild(item, add: boolean) {
    //debugger;
    if (add) {
      this.addNewChild();
    } else {
      this.removeChild(item);
    }

  }

  removeChild(item) {
    if (this.children.length > 1) {
      this.children = this.children.filter(a => a.id != item.id)
    }

    this.children.forEach((a,index)=>a.id=index)

  }

  addNewChild() {
    this.children.push({
      id: this.children.length,
      age: 1, height: 1, weight: 1
    })
  }

}
