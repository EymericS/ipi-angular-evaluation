import { Component, Input } from '@angular/core';
import { AdoptionService } from '../adoption.service';
import { Pokemon } from '../models';

@Component({
  selector: 'app-poke-card',
  template: `
    <ng-template [ngIf]="pokemon">
      <h1>{{pokemon.name}}</h1>

      <div class="flex">
        <div>
          <section>
            <h2>Types:</h2>
            <ul>
              <li *ngFor="let type of pokemon.types">{{type.type.name}}</li>
            </ul>
          </section>

          <section>
            <h2>Abilities:</h2>
            <ul><li *ngFor="let ability of pokemon.abilities">{{ability.ability.name}}</li></ul>
          </section>

          <section>
            <h2>Weight:</h2><span>{{pokemon.weight}}kg</span>
          </section>
        </div>
        <img [src]="pokemon.sprites.other['official-artwork'].front_default" alt="">
      </div>

      <button [class.outlined]="adopted" (click)="adopted
        ? adoptionService.unadopt(pokemon) 
        : adoptionService.adopt(pokemon)"
      >
        {{adopted ? 'UNADOPT' : 'ADOPT'}}
      </button>
    </ng-template>
  `,
  styles: [`
    :host {
      border: 1px solid #dddddd;
      display: block;
      border-radius: 8px;
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }
    h1 {
      color: red;
      text-align: center;
    }
    h2 {
      color: #50515E;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 100%;
    }
    h1, h2 {
      margin: 0;
    }
    li, span {
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 140%;
      text-transform: capitalize;
    }
    .flex {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    button {
      margin-left: auto
    }
    img {
      flex: 1;
      width: 100%;
    }
  `]
})
export class PokeCardComponent {
  @Input() pokemon: Pokemon | null = null;
  adopted = false;

  constructor(
    public adoptionService: AdoptionService
  ) {
    this.adoptionService.adoptionList.subscribe(list => {
      this.adopted = list
        // Si l'id du pokemon est dans la liste
        // Alors il est adopte
        .find(p => this.pokemon?.id === p.id) !== undefined
    });
  }
}
