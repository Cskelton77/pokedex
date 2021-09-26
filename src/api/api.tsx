import { Pokemon } from "../interfaces/Pokemon";
import { PokemonSpecies } from "../interfaces/PokemonSpecies";

const URL = 'https://pokeapi.co/api/v2'

const searchByName = async (name: string): Promise<Pokemon> => {
    const data = await fetch(`${URL}/pokemon/${name.toLowerCase()}`)
        .then(response => response.json())    
    return data;
}

const getDetailsById = async (id: number): Promise<PokemonSpecies> => {
    const data = await fetch(`${URL}/pokemon-species/${id}`)
        .then(response => response.json()) 
    return data;
}

const getEvolutionChainById = async (id: number): Promise<PokemonSpecies> => {
    const data = await fetch(`${URL}/evolution-chain/${id}`)
        .then(response => response.json()) 
    return data;
}

export {getDetailsById, getEvolutionChainById, searchByName}