
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newPlayer, removePlayer } from './reducerFeatures/Player';

function App() {

  const dispatch = useDispatch();
  const playerList = useSelector(state => state.playersReducer.value);

  const reversedPlayer = [...playerList].reverse();
  const [playerName, setPlayerName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    console.log(reversedPlayer);
  }, [playerList]);


  return (
    <div className="App">
      <div className="formular">
        
        <input
          type="text"
          className="form-control"
          value={playerName}
          placeholder='Enter name...'
          onChange={(e) => { setPlayerName(e.target.value) }} />
        <input
          type="text"
          value={avatar}
          className="form-control"
          placeholder='Enter nick...'
          onChange={(e) => { setAvatar(e.target.value) }} />
        <button className="btn btn-success" onClick={() => {
          dispatch(
            newPlayer({
              id: playerList[playerList.length - 1].id + 1,
              playerName,
              avatar,
            })
          );
          setPlayerName("")
          setAvatar("")
        }}>Spieler hizufügen</button>
        
      </div>

      {/* <button className="btn btn-warning">remove</button> */}

      {reversedPlayer.map((spieler) => {
        return (
          <div className="liste" key={spieler.id} style={(spieler.id % 2 === 0) ? {backgroundColor: "gainsboro"} : {backgroundColor: "#F0EBE3"}} >
            <p>Name: {spieler.playerName}</p>
            <p>avatar: {spieler.avatar}</p>
          <button className='btn btn-info' onClick={() => {
          dispatch(
            removePlayer({ id: spieler.id }))}}>entfernen</button>
          </div>
        )
      })}


    </div>
  );
}

export default App;
