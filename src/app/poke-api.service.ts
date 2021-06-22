import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
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
        
        const requests = page.results
            // .map sur le tableau de resultat permet de mapper chaque (PokemonInfo) vers un (Pokemon)
            .map(pInfo => this.fetchPokemon(pInfo.url));

        return combineLatest(requests);
    }

    fetchPokemon(url: string) {
        return this.client
            .get<Pokemon>(url);
    }
}