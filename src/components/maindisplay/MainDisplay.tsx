import './MainDisplay.scss';

interface MainDisplayInterface {
    data: any;
    details: any;
    types: any;
    moves: any;
    abilities: any;
}

const MainDisplay = ({data, details, types, moves, abilities}: MainDisplayInterface)=> {
    return (
        <div className="display">
            <TopDecorations />
            
            <div className="display-inner">
                <span className="poke-name">{data?.name}</span>
                <span className="poke-type">{details && 'Type: '}{data && types?.join(", ")}</span>
                <img src={data?.sprites.front_default} alt={data?.name} />

                <div className="panels">
                    <div className="left-panel">
                        {details && 'Color:'} {details?.color.name}
                        <br />
                        {details && 'Multiple genders:'} {details?.has_gender_differences.toString()}
                        <br />
                        {details && `No. of varieties: ${details?.varieties.length}`}
                        <br />
                        {data && 'Abilities: '}{abilities && abilities.join(", ")}
                    </div>

                    <div className="right-panel">
                        
                        { moves && (
                            <>
                                Moves:
                                <div className='move-box'>
                                    { moves && moves.map((move: any)=> <li key={move}>{move}</li>) }
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
