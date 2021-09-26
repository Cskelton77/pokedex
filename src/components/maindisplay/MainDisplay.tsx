import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonSpecies } from '../../interfaces/PokemonSpecies';
import './MainDisplay.scss';

interface MainDisplayInterface {
    pkmnData?: Pokemon;
    speciesData?: PokemonSpecies;
    types?: Array<string>;
    moves?: Array<string>;
    abilities?: Array<string>;
}

const MainDisplay = ({pkmnData, speciesData, types, moves, abilities}: MainDisplayInterface)=> {
    return (
        <div className="display">
            <TopDecorations />
            
            <div className="display-inner">
                <span className="poke-name">{pkmnData?.name}</span>
                <span className="poke-type">{speciesData && 'Type: '}{pkmnData && types?.join(", ")}</span>
                <img src={pkmnData?.sprites.front_default} alt={pkmnData?.name} />

                <div className="panels">
                    <div className="left-panel">
                        {speciesData && 'Color:'} {speciesData?.color.name}
                        <br />
                        {speciesData && 'Multiple genders:'} {speciesData?.has_gender_differences.toString()}
                        <br />
                        {speciesData && `No. of varieties: ${speciesData?.varieties.length}`}
                        <br />
                        {pkmnData && 'Abilities: '}{abilities && abilities.join(", ")}
                    </div>

                    <div className="right-panel">
                        { moves && (
                            <>
                                Moves:
                                <div className='move-box'>
                                    { moves && moves.map((move: string)=> <li key={move}>{move}</li>) }
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <BottomDecorations />
            
        </div>
    );
}

export default MainDisplay;

const TopDecorations = () => (
    <div className="top-decorations">
        <div className="red-light small-button" />
        <div className="red-light small-button" />
    </div>
)
const BottomDecorations = () => (
    <div className="bottom-decorations">
        <div className="redlight small-button" />
        <div className="voicebars">
            <span className="line" />
            <span className="line" />
            <span className="line" />
            <span className="line" />
        </div>
    </div>
)
