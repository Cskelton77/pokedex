import { EvolutionChainEntry } from '../../interfaces/EvolutionChainEntry';
import './SecondaryDisplay.scss';

interface SecondaryDisplayInterface {
    name?: string;
    evolutionChain?: Array<EvolutionChainEntry>;
    locationAreas?: Array<string>;
    handleSearch: (pkmn: string) => void;
}

const SecondaryDisplay = ({name, evolutionChain, locationAreas, handleSearch}: SecondaryDisplayInterface)=> {
    const width = window.innerWidth;
    return (
        <>
            { (width > 768 || name) && (
                <div className="secondary-display">
                    <div className="secondary-display--inner">
                        {evolutionChain && evolutionChain.length > 0 && (
                            <>
                                <span className="title">{"Evolutionary Chain"}</span>
                                <div className="evolution-chain">
                                    {evolutionChain.map((evolution: any) => (
                                        <span 
                                            key={evolution.name}
                                            className="pkmn" 
                                            tabIndex={0} 
                                            onClick={() => handleSearch(evolution.name)}
                                            onKeyUp={(e) => e.key==="Enter" && handleSearch(evolution.name)}
                                        >
                                            <img src={evolution.image} alt={evolution.name} />
                                            <span className="pokeName">{evolution.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="locations">
                            {locationAreas && <span className="location-title">
                                <span className="pokemon-name">{name}</span> can be found in the following areas: </span>}
                            <span className="location-list">
                                {locationAreas?.map((location) => (<li key={location}>{location}</li>))}
                            </span>
                        </div>
                    </div>
                </div>
            )}
            
            { width > 768  && (
            <span className="screen-decoration">
                <div className="bar" />
                <div className="bar" />
            </span>
            )}
        </>
    );
}

export default SecondaryDisplay;
