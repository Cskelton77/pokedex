import './SecondaryDisplay.scss';

interface SecondaryDisplayInterface {
    name: string | undefined;
    evolutionChain: any;
    locationAreas: Array<string> | undefined;
    handleSearch: (pkmn: string) => void;
}

const SecondaryDisplay = ({name, evolutionChain, locationAreas, handleSearch}: SecondaryDisplayInterface)=> {

    // Thing                API Endpoint
    // [X] Evolutions      evolution-chain
    // [X] Locations        pokemon/{id}/encounters
    // [X] A way to click on a Pokémon evolution type and see information about that evolution type 

    return (
        <>
            <div className="secondary-display">
                {evolutionChain && evolutionChain.length > 0 && (
                    <>
                        <span className="title">{"Evolutionary Chain"}</span>
                        <div className="evolution-chain">
                            {evolutionChain.map((evolution: any) => (
                                <span 
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
                        {locationAreas?.map((location) => {
                            return <li key={location}>{location}</li>
                        })}
                    </span>
                </div>
            </div>
            
            <span className="screen-decoration">
                <div className="bar" />
                <div className="bar" />
            </span>
        </>
    );
}

export default SecondaryDisplay;
