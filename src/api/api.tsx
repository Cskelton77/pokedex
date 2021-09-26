import { Pokemon } from "../interfaces/Pokemon";
import { PokemonSpecies } from "../interfaces/PokemonSpecies";

const URL = 'https://pokeapi.co/api/v2'

const searchByName = async (name: string): Promise<Pokemon> => {
    const data = await fetch(`${URL}/pokemon/${name.toLowerCase()}`)
    const dataJson = await data.json();  
    return dataJson;
}

const getDetailsById = async (id: number): Promise<PokemonSpecies> => {
    const data = await fetch(`${URL}/pokemon-species/${id}`)
    const dataJson = await data.json();  
    return dataJson;
}



export {getDetailsById, searchByName}