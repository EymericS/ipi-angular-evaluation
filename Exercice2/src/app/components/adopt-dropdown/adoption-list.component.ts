import { Component } from '@angular/core';
import { AdoptionService } from 'src/app/adoption.service';

@Component({
  selector: 'app-adoption-list',
  template: `
    <ul>
      <app-adoption-list-item 
        *ngFor="let pokemon of adoptionService.adoptionList | async"
        [pokemon]="pokemon"
      >
      </app-adoption-list-item>
    </ul>
  `,
  styles: [`
    ul {
      padding: 0;
    }
  `]
})
export class AdoptionListComponent {
  constructor(
    public adoptionService: AdoptionService
  ) { }
}
