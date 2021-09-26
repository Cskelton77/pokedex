import './HistoryDisplay.scss'

interface PokedexInterface {
    history: Array<string>,
    handleSearch: (pkmn: string) => void;
}

const HistoryDisplay = ({history, handleSearch}: PokedexInterface)=> {
   
    return (
        <>
            <span className="history-title">
                {'Recent Successful Identifications'}
            </span>
            <div className="history-box">
                {history && history.length > 0 && (
                    history.map((entry) => <button onClick={()=> handleSearch(entry)} key={entry}>{entry}</button>)
                )}
                {history && history.length === 0 && <span className='no-history'>No recent identifications</span>}
            </div>
        </>  
    );
}

export default HistoryDisplay;
