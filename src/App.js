import React from 'react';
import './App.css';
import GridBoard from './Components/GridBoard';
import NextBlock from './Components/NextBlock';
import ScoreBoard from './Components/ScoreBoard';
import  Controls from './Components/Controls'
import MessagePopup from './Components/MessagePopup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='App-Title'>Tetris Arcade game</h1>
      </header>
      <GridBoard />
      <NextBlock/>
      <ScoreBoard/>
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;
