import './DataEntry.scss'

interface DataEntryInterface {
    setSearch: (pkmn: string) => void;
    handleSearch: (pkmn?: string) => void;
}

const DataEntry = ({setSearch, handleSearch}: DataEntryInterface)=> {
    return (
        <div className="data-entry">
            <input 
                placeholder={'Search for Pokemon'}
                autoFocus
                type='text' 
                onChange={(e) => setSearch(e.target.value)} 
                onKeyDown={e => e.key==="Enter" && handleSearch()}
                className='pokedex-input'
            />
            <button onClick={() => handleSearch()} />
        </div>
    );
}

export default DataEntry;
