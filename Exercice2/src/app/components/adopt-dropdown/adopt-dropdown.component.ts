import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt-dropdown',
  template: `
    <app-adoption-list></app-adoption-list>
    <button>ADOPT THEM ALL</button>
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
      top: 46px;
      right: 0px;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      background-color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    button {
      width: max-content;
    }
  `]
})
export class AdoptDropdownComponent {
}
