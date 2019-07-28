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

  onAddNewChild() {
    this.addNewChild();
  }

  addNewChild() {
    this.children.push({ id:this.children.length,
      age: 1, height: 1, weight: 1
    })
  }

}
