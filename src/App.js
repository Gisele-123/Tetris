import React from 'react';
import './App.css';
import GridSquare from './Components/GridSquare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='App-Title'>Tetris Arcade game</h1>
      </header>
      <GridSquare color="1"/>
    </div>
  );
}

export default App;
