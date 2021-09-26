import MoveBox from '../movebox/MoveBox';
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
             <div className="top-decorations">
                <div className="red-light small-button" />
                <div className="red-light small-button" />
            </div>
            
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
                        {data && <MoveBox moves={moves} />}
                    </div>
                </div>
            </div>
            
            <div className="bottom-decorations">
                <div className="redlight small-button" />
                <div className="voicebars">
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </div>
            </div>
        </div>
    );
}

export default MainDisplay;
