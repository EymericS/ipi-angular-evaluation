import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Pokemon } from '../models';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'app-poke-list',
  template: `
    <button [disabled]="prevURL == ''" (click)="prevPage()">previous</button>
    {{pageNumber}}
    <button [disabled]="nextURL == ''" (click)="nextPage()">next</button>
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
  pageNumber: number = 1;
  nextURL:string = "";
  prevURL:string = "";


  constructor(
    public pokeService: PokeAPIService
  ) {
    this.useService("");
  }

  useService(url:string) {
    this.pokeService
      .fetchPokemons("")
      .pipe(
        // Transformation sur le flux
        // On transforme chaque valeur (PagedAPIResult<PokemonInfo>) en liste de pokemon (Pokemon[])
        // Merge map nous permet de faire la transformation
        mergeMap((pagedResult) => {
          this.nextURL = pagedResult.next != undefined ? pagedResult.next : "";
          this.prevURL = pagedResult.previous != undefined ? pagedResult.previous : "";
          return this.pokeService.fetchFullPokemonForPage(pagedResult);
        })
      )
      .subscribe(pokemons => this.pokemons = pokemons)
  }

  nextPage() {
    this.useService(this.nextURL);
    this.pageNumber++;
  }

  prevPage() {
    this.useService(this.prevURL);
    this.pageNumber--;
  }
}
