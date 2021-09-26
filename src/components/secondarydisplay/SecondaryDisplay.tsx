import './SecondaryDisplay.scss';

interface SecondaryDisplayInterface {
    evolutionChain: any;
    handleSearch: (pkmn: string) => void;
    // details: any;
    // types: any;
    // moves: any;
    // abilities: any;
}

const SecondaryDisplay = ({evolutionChain, handleSearch}: SecondaryDisplayInterface)=> {

    // Thing                API Endpoint
    // [X] Evolutions      evolution-chain
    // [ ] Locations        pokemon/{id}/encounters
    // [ ] A way to click on a Pokémon evolution type and see information about that evolution type 

    console.log(evolutionChain)
    return (
        <>
        <div className="secondary-display">
            {evolutionChain && evolutionChain.length > 0 && (
                <>
                    <span className="title">{"Evolutionary Chain"}</span>
                    <div className="evolution-chain">
                        {evolutionChain.map((evolution: any) => (
                            <span className="pkmn" onClick={() => handleSearch(evolution.name)}>
                                <img src={evolution.image} alt={evolution.name} />
                                <span className="pokeName">{evolution.name}</span>
                            </span>
                        ))}
                    </div>
                </>
            )}
            
        </div>
        <span className="screen-decoration">
            <div className="bar" />
            <div className="bar" />
        </span>
        
        </>
    );
}

export default SecondaryDisplay;
