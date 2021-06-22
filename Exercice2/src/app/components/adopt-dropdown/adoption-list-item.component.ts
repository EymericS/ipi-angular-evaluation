import { Component, Input } from '@angular/core';
import { AdoptionService } from 'src/app/adoption.service';
import { Pokemon } from 'src/app/models';

@Component({
  selector: 'app-adoption-list-item',
  template: `
    <ng-template [ngIf]="pokemon">
      <img [src]="pokemon.sprites.other['official-artwork'].front_default">
      <h2>{{pokemon.name}}</h2>
      <button 
        class="outlined" 
        (click)="adoptionService.unadopt(pokemon)"
      >
        REMOVE
      </button>
    </ng-template>
  `,
  styles: [`
    :host {
      display: flex;
      gap: 8px;
    }
    h2 {
      margin: 0;
    }
    img {
      height: 32px;
    }
    button {
      margin-left: auto;
    }
  `]
})
export class AdoptionListItemComponent {
  @Input() pokemon?: Pokemon;

  constructor(
    public adoptionService: AdoptionService
  ) { }
}
