import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  list = ['Jean', 'Jacques', 'Martin'];
  isVisible = true;

  constructor() {}

  ngOnInit(): void {
  }

  toggleIsVisible() {
    this.isVisible = !this.isVisible;
  }

}
