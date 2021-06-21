export interface Ability {
    isHidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    }
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: Ability[];
    types: Type[];
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    }
}

export interface PagedAPIResult<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface PokemonInfo {
    name: string;
    url: string;
}