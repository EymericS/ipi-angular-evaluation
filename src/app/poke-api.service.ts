import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { combineLatest, from, Observable } from "rxjs";
import { mergeMap, combineAll } from "rxjs/operators";
import { PagedAPIResult, Pokemon, PokemonInfo } from "./models";

@Injectable({
    providedIn: 'root'
})
export class PokeAPIService {
    constructor(
        private client: HttpClient
    ) { }

    fetchPokemons() {
        return this.client
            .get<PagedAPIResult<PokemonInfo>>('https://pokeapi.co/api/v2/pokemon');
    }

    fetchFullPokemonForPage(page: PagedAPIResult<PokemonInfo>): Observable<Pokemon[]> {
        // Combine latest nous permet de prendre un tableau d'observable
        // Et de le transformer en un observable de tableau
        // On attend que chaque requete ait fini pour les regrouper
        return combineLatest(
            // .map sur le tableau de resultat permet de mapper chaque (PokemonInfo) vers un (Pokemon)
            page.results.map(pInfo => this.fetchPokemon(pInfo.url))
        );
    }

    fetchPokemon(url: string) {
        return this.client
            .get<Pokemon>(url);
    }
}