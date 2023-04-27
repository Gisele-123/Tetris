import React from 'react';
import './App.css';
import GridBoard from './Components/GridBoard';
import NextBlock from './Components/NextBlock';
import ScoreBoard from './Components/ScoreBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='App-Title'>Tetris Arcade game</h1>
      </header>
      <GridBoard />
      <NextBlock/>
      <ScoreBoard/>
    </div>
  );
}

export default App;
