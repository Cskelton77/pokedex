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
             <div className="topDecorations">
                <div className="redLight smallButton" />
                <div className="redLight smallButton" />
            </div>
            
            <div className="displayInner">
                <span className="pokeName">{data?.name}</span>
                <span className="pokeType">{details && 'Type: '}{data && types?.join(", ")}</span>
                <img src={data?.sprites.front_default} alt={data?.name} />

                <div className="panels">
                    <div className="leftPanel">
                        {details && 'Color:'} {details?.color.name}
                        <br />
                        {details && 'Multiple genders:'} {details?.has_gender_differences.toString()}
                        <br />
                        {details && `No. of varieties: ${details?.varieties.length}`}
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

export default MainDisplay;
