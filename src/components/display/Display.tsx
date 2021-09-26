import React, { useEffect, useState } from 'react';
import { getDetailsById } from '../../api/api';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonSpecies } from '../../interfaces/PokemonSpecies';
import MoveBox from '../movebox/MoveBox';
import './Display.scss';


const Display = ({data}: {data: Pokemon | undefined})=> {


    // Hooks
    const [details, setDetails] = useState<PokemonSpecies>();
    // const [evolutionChain, setEvolutionChain] = useState<any>();
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
     // UseEffects
    useEffect(()=> {
        if(data){
            getDetailsById(data.id)
            .then(response => setDetails(response));
            
            // getEvolutionChainById(data.id)
            // .then(r => setEvolutionChain(r))

            setTypes(data.types.map((type) => type.type.name))
            
            getMoves(data.moves);
            getAbilities(data.abilities);

            getLocationInfo(data.location_area_encounters)
            
                
        }

    }, [data])
        
    console.log(data)
    console.log(details)
    // console.log(evolutionChain)

    // Thing                API Endpoint
    // [ ] Evolutions      evolution-chain
    // [X] Genders          pokemon-species
    // [ ] Locations        pokemon/{id}/encounters
    // [X] Varieties        pokemon-species

    //  A way to click on a Pokémon evolution type and see information about that evolution type 
    // A way to look at past Pokémon that have been searched

    return (
        <div className="display">
            <div className="displayInner">
                <span className="pokeName">{data?.name}</span>
                <span className="pokeType">{details && 'Type: '}{data && types}</span>
                
                <img src={data?.sprites.front_default} alt={data?.name} />
                <div className="panels">
                    <div className="leftPanel">
                        {details && 'Color:'} {details?.color.name}
                        <br />
                        {details && 'Multiple genders:'} {details?.has_gender_differences.toString()}
                                        <br />
                        {details && `Number of varieties: ${details?.varieties.length}`}
                        <br />
                        {data && 'Abilities: '}{abilities && abilities.join(", ")}
                    </div>

                    <div className="rightPanel">
                        {data && <MoveBox moves={moves} />}
                    </div>
                </div>
                
            
            </div>
            
            <div className="bottomDecorations">
                <div className="redLight smallButton" />
                <div className="voiceBars">
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </div>
            </div>
        </div>
    );
}

export default Display;
