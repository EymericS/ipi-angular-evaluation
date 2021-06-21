import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Pokemon } from '../models';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'app-poke-list',
  template: `
    <app-poke-card 
      *ngFor="let pokemon of pokemons" 
      [pokemon]="pokemon"
    ></app-poke-card>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      margin: 40px auto;
    }
  `]
})
export class PokeListComponent {
  pokemons: Pokemon[] = [];

  constructor(
    public pokeService: PokeAPIService
  ) {
    pokeService
      .fetchPokemons()
      .pipe(
        // Transformation sur le flux
        // On transforme chaque valeur (PagedAPIResult<PokemonInfo>) en liste de pokemon (Pokemon[])
        // Merge map nous permet de faire la transformation
        mergeMap(pagedResult => this.pokeService.fetchFullPokemonForPage(pagedResult))
      )
      .subscribe(pokemons => this.pokemons = pokemons)
  }
}
