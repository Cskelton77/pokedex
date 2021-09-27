import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDetailsById, searchByName} from '../../api/api';
import { addHistoryEntry } from '../../ducks/historyReducer';
import { EvolutionChainEntry } from '../../interfaces/EvolutionChainEntry';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonMove } from '../../interfaces/PokemonMove';
import { PokemonSpecies } from '../../interfaces/PokemonSpecies';
import { RootState } from '../../store';
import DataEntry from '../dataentry/DataEntry';
import HistoryDisplay from '../historydisplay/HistoryDisplay';
import Display from '../maindisplay/MainDisplay';
import SecondaryDisplay from '../secondarydisplay/SecondaryDisplay';
import './Pokedex.scss'

const Pokedex = ()=> {
    const { history } = useSelector((store: RootState) => store.history)
    const dispatch = useDispatch();
    const width = window.innerWidth;
    
    // Hooks
    const [search, setSearch] = useState<string>('')

    // Large datasets
    const [pokemonData, setPokemonData] = useState<Pokemon>()
    const [speciesData, setSpeciesData] = useState<PokemonSpecies>();

    // Specific derived data
    const [evolutionChain, setEvolutionChain] = useState<Array<EvolutionChainEntry>>();
    const [types, setTypes] = useState<Array<string>>();
    const [moves, setMoves] = useState<Array<string>>();
    const [abilities, setAbilities] = useState<Array<string>>();
    const [locationAreas, setLocationAreas] = useState<Array<string>>();

    // Additional API Calls
    const getAbilities = async (abilities: Array<any>) => {
        const abilityInfo =  await Promise.all(abilities.map(async (ability) => {
            const info = await (await fetch(ability.ability.url)).json();
            const nameEn = info.names.filter((name: Record<any, any>) => name.language.name==='en')    
            return nameEn[0].name
        }))
        setAbilities(abilityInfo)
    }

    const getMoves = async (moves: Array<PokemonMove>) => {
        const moveInfo =  await Promise.all(moves.map(async (move) => {
            const info = await (await fetch(move.move.url)).json();
            const nameEn = info.names.filter((name: Record<any, any>) => name.language.name==='en')    
            return nameEn[0].name
        }))
        setMoves(moveInfo)
    }

    const getLocationInfo = async (locUrl: string) => {
        const locationInfo = await (await fetch(locUrl)).json();
        const listOfLocations = locationInfo.map((location: any) => {
                return location.location_area.name.split('-').join(' ')
        })
        setLocationAreas(listOfLocations)
    }

    const getEvolutionChainByURL = async (url: string): Promise<any> => {
        const data = await fetch(url)
        const dataJson = await data.json();  
        return dataJson;
    }

    const getEvolutionInfo = async (evolutionChain: any) => {
        const evoInfo: Array<EvolutionChainEntry> =  await Promise.all(evolutionChain.map(async (evolution: any) => {
            const info = await (await fetch(evolution.url)).json();
            const nameEn = info.names.filter((name: Record<any, any>) => name.language.name==='en') 
            const image = await searchByName(nameEn[0].name);  
            return {
                name: nameEn[0].name,
                image: image.sprites.front_default
            }
        }))
        setEvolutionChain(evoInfo)
   }

   // UseEffects
   useEffect(()=> {
       if(pokemonData){
           getDetailsById(pokemonData.id)
               .then(response => setSpeciesData(response));
           setTypes(pokemonData.types.map((type) => type.type.name))
           getMoves(pokemonData.moves);
           getAbilities(pokemonData.abilities);
           getLocationInfo(pokemonData.location_area_encounters)
       }
   }, [pokemonData])

   useEffect(()=> {
        const pokemonChain: Array<any> = [];
        const addEvolutionToArray = (chain: any) => {
            pokemonChain.push(chain.species)
            if(chain.evolves_to.length > 0){
                addEvolutionToArray(chain.evolves_to[0])
            }
        }

       if(speciesData){
            getEvolutionChainByURL(speciesData.evolution_chain.url)
               .then(evolutionChain => addEvolutionToArray(evolutionChain.chain) )
               .then(() => getEvolutionInfo(pokemonChain))
       }
   }, [speciesData])
       
    // Event Handlers
    const handleSearch = async (param = search)=> {
        if(param){
            const searchResult = await searchByName(param)
            setPokemonData(searchResult)
            dispatch(addHistoryEntry(param))            
        }
    }

    
    

    return (
        <div className="pokedex">
            <div className="left-page">
                <TopPanelDecorations />
                { width <= 768 && <DataEntry setSearch={setSearch} handleSearch={handleSearch} /> }
                <Display pkmnData={pokemonData} speciesData={speciesData} types={types} moves={moves} abilities={abilities} />
                { width > 768 && <BottomPanelDecorations /> }
            </div>
            <div className="right-page">
                <SecondaryDisplay name={pokemonData?.name} evolutionChain={evolutionChain} locationAreas={locationAreas} handleSearch={handleSearch} />
                { width > 768 && <DataEntry setSearch={setSearch} handleSearch={handleSearch} /> }
                <HistoryDisplay history={history} handleSearch={handleSearch} />
            </div>
        </div>
    );
}

export default Pokedex;

const TopPanelDecorations = () => (
    <div className="left-panel--top-decoration">
        <div className="blue-light" />
        <div className="red-light small-button" />
        <div className="yellow-light small-button" />
        <div className="green-light small-button" />
    </div>
)

const BottomPanelDecorations = () => (
    <div className="left-panel--bottom-decoration">
        <div className="bar red-bar" />
        <div className="bar blue-bar" />
    </div>
)