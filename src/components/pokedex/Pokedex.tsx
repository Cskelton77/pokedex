import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {searchByName} from '../../api/api';
import { addHistoryEntry } from '../../ducks/historyReducer';
import { Pokemon } from '../../interfaces/Pokemon';
import { RootState } from '../../store';
import Display from '../display/Display';
import './Pokedex.scss'

const Pokedex = ()=> {
  const { history } = useSelector((store: RootState) => store.history)


  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<Pokemon>()
  const dispatch = useDispatch();

  const handleSearch = async ()=> {
        const searchResult = await searchByName(search)
        setData(searchResult)
        dispatch(addHistoryEntry(search))
  }
  return (
    <div className="pokedex">
        <div className="leftPage">
            <div className="leftPanelDecoration">
                <div className="blueLight " />
                <div className="redLight smallButton" />
                <div className="yellowLight smallButton" />
                <div className="greenLight smallButton" />
            </div>
            <Display data={data} />
            <div className="leftPanelBottomDecoration">
                <div className="bar redBar" />
                <div className="bar blueBar" />
            </div>
        </div>
        <div className="rightPage">
            <div className="rightPanelDecoration" />
            <div className="dataEntry">
               
                <input 
                    type='text' 
                    onChange={(e) => setSearch(e.target.value)} 
                    onKeyDown={e => e.key==="Enter" && handleSearch()}
                    className='pokedexInput'
                />
                <button onClick={handleSearch} />

               
            </div>
            <div className="historyBox">
                {'History'}<br />
                {history.map((entry) => <li key={entry}>{entry}</li>)}
            </div>
        </div>
    </div>
  );
}

export default Pokedex;
