import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDetailsById, getEvolutionChainByURL, searchByName} from '../../api/api';
import { addHistoryEntry } from '../../ducks/historyReducer';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonSpecies } from '../../interfaces/PokemonSpecies';
import { RootState } from '../../store';
import Display from '../maindisplay/MainDisplay';
import SecondaryDisplay from '../secondarydisplay/SecondaryDisplay';
import './Pokedex.scss'

const Pokedex = ()=> {
  const { history } = useSelector((store: RootState) => store.history)
  const dispatch = useDispatch();

   // Hooks
   const [search, setSearch] = useState<string>('')

   const [data, setData] = useState<Pokemon>()
   const [details, setDetails] = useState<PokemonSpecies>();

   const [evolutionChain, setEvolutionChain] = useState<any>();
   const [evolutionChainVisible, setEvolutionChainVisible] = useState<Array<any>>();

   const [types, setTypes] = useState<Array<string>>();
   const [moves, setMoves] = useState<Array<string>>();
   const [abilities, setAbilities] = useState<Array<string>>();

   // const [isLoading, setIsLoading] = useState<boolean>()

   // Additional API Calls
   const getAbilities = async (abilities: Array<any>) => {
       const abilityInfo =  await Promise.all(abilities.map(async (ability) => {
           const info = await (await fetch(ability.ability.url)).json();
           const nameEn = info.names.filter((name: Record<any, any>) => name.language.name==='en')    
           return nameEn[0].name
       }))
       setAbilities(abilityInfo)
   }

   const getMoves = async (moves: Array<any>) => {
       const moveInfo =  await Promise.all(moves.map(async (move) => {
           const info = await (await fetch(move.move.url)).json();
           const nameEn = info.names.filter((name: Record<any, any>) => name.language.name==='en')    
           return nameEn[0].name
       }))
       setMoves(moveInfo)
   }

   const getLocationInfo = async (locUrl: string) => {
       const locationInfo = await (await fetch(locUrl)).json();
       console.log('locationInfo', locationInfo)
   }

   const getEvolutionInfo = async (evolutionChain: any) => {
    const evoInfo =  await Promise.all(evolutionChain.map(async (evolution: any) => {
        const info = await (await fetch(evolution.url)).json();
        const nameEn = info.names.filter((name: Record<any, any>) => name.language.name==='en') 
        const image = await searchByName(nameEn[0].name);  
        return {
            name: nameEn[0].name,
            image: image.sprites.front_default
        }
    }))
    setEvolutionChainVisible(evoInfo)
   }

   // UseEffects
   useEffect(()=> {
       if(data){
           getDetailsById(data.id)
               .then(response => setDetails(response));
           setTypes(data.types.map((type) => type.type.name))
           getMoves(data.moves);
           getAbilities(data.abilities);
           getLocationInfo(data.location_area_encounters)
       }
   }, [data])

   useEffect(()=> {
       if(details){
           getEvolutionChainByURL(details.evolution_chain.url)
               .then(r => setEvolutionChain(r))
               .then(r=> console.log(r))
       }
   }, [details])

   useEffect(()=> {
       const pokemonChain: Array<any> = [];
       const addEvolutionToArray = (chain: any) => {
           console.log('chain', chain)
           pokemonChain.push(chain.species)
           if(chain.evolves_to.length > 0){
               addEvolutionToArray(chain.evolves_to[0])
           }
       }
       if(evolutionChain){
           addEvolutionToArray(evolutionChain.chain)   
           console.log(pokemonChain)
           getEvolutionInfo(pokemonChain)
       }
   }, [evolutionChain]);
       
   console.log(data)
   console.log(details)
   console.log(evolutionChainVisible)

 
   // Event Handlers
    const handleSearch = async (param = search)=> {
        const searchResult = await searchByName(param)
        setData(searchResult)
        if(!history.includes(param)){
            dispatch(addHistoryEntry(param))
        }
    }

    // [X] A way to look at past Pokémon that have been searched

    return (
        <div className="pokedex">
            <div className="left-page">
                <div className="left-panel--top-decoration">
                    <div className="blue-light" />
                    <div className="red-light small-button" />
                    <div className="yellow-light small-button" />
                    <div className="green-light small-button" />
                </div>
                <Display data={data} details={details} types={types} moves={moves} abilities={abilities} />
                <div className="left-panel--bottom-decoration">
                    <div className="bar red-bar" />
                    <div className="bar blue-bar" />
                </div>
            </div>
            <div className="right-page">
                <SecondaryDisplay evolutionChain={evolutionChainVisible} handleSearch={handleSearch} />
                <div className="data-entry">
                
                    <input 
                        type='text' 
                        onChange={(e) => setSearch(e.target.value)} 
                        onKeyDown={e => e.key==="Enter" && handleSearch()}
                        className='pokedex-input'
                    />
                    <button onClick={() => handleSearch()} />

                </div>
                <span className="history-title">
                {'Recent Successful Identifications'}
                </span>
                <div className="history-box">
                    {history && history.length > 0 && (
                        history.map((entry) => <button onClick={()=> handleSearch(entry)} key={entry}>{entry}</button>)
                    )}
                    {history && history.length === 0 && <span className='no-history'>No recent identifications</span>}
                </div>
            </div>
        </div>
    );
}

export default Pokedex;
