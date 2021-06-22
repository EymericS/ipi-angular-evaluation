import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <h1>PokeAdopt</h1>
    <app-adopt-dropdown-button></app-adopt-dropdown-button>
  `,
  styles: [`
    :host {
      background: red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
    }
    h1 {
      margin: 0;
      color: white;
    }
  `]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
