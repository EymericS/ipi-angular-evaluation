import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar></app-top-bar>
    <app-poke-list></app-poke-list>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-areas: "topbar"
        "content";
    }
  `]
})
export class AppComponent { }
