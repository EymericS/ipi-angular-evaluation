import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Pokemon } from "./models";


@Injectable({
    providedIn: 'root'
})
export class AdoptionService {
    private _adoptionList = new BehaviorSubject<Pokemon[]>([]);

    get adoptionList(): Observable<Pokemon[]> {
        return this._adoptionList.asObservable();
    }

    adopt(pokemon: Pokemon) {
        this._adoptionList.next([
            ...this._adoptionList.value,
            pokemon
        ]);
    }

    unadopt(pokemon: Pokemon) {
        this._adoptionList.next(
            this._adoptionList.value.filter(p => pokemon.id !== p.id)
        );
    }
}