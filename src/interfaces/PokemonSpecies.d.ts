export interface PokemonSpecies {
    base_happiness: number;
    capture_rate:  number;
    color: Record<key, string>;
    egg_groups: Array<any>;
    evolution_chain: Record<key, string>;
    evolves_from_species: Record<key, string>;
    flavor_text_entries:  Array<any>;
    form_descriptions:  Array<any>;
    forms_switchable: boolean;
    gender_rate:  number;
    genera:  Array<any>;
    generation: Record<key, string>;
    growth_rate: Record<key, string>;
    habitat: Record<key, string>;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical:boolean;
    name: string;
    names:  Array<any>;
    order: number;
    pal_park_encounters:  Array<any>;
    pokedex_numbers:  Array<any>;
    shape: Record<key, string>;
    varieties:  Array<any>;
}
