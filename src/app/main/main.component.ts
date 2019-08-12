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

    this.children.forEach((a, index) => a.id = index)

  }

  addNewChild() {
    this.children.push({
      id: this.children.length,
      age: 5, height: 60, weight: 30
    })
  }


  getSeatPosition(num,child) {

    let str = child.age>=2?'scaleX(-100)':'';
    console.log(child.age);
    
    switch (num) {
      case 0:
        return `translate(150px,0)`;

      case 1:
        return `translate(220px,0)`;
      case 2:
        return `translate(220px,40px)`;
      case 3:
        return `translate(220px,80px)`;
    }

  }

}
