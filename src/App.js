import React from 'react';
import './App.css';
// import GridSquare from './Components/GridSquare';
import GridBoard from './Components/GridBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='App-Title'>Tetris Arcade game</h1>
      </header>
      <GridBoard />
    </div>
  );
}

export default App;
