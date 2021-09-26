export interface Pokemon {
    abilities: Array<any>;
    base_experience: number;
    forms: Array<any>;
    game_indices: Array<any>;
    height: number;
    held_items: Array<any>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<PokemonMove>;
    name: string;
    order: number;
    past_types: Array<any>;
    species: Record<key, string>;
    sprites: Record<key, string>;
    stats: Array<any>;
    types: Array<PokemonType>;
}



