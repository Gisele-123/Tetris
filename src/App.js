import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GridBoard from './Components/GridBoard';
import NextBlock from './Components/NextBlock';
import ScoreBoard from './Components/ScoreBoard';
import  Controls from './Components/Controls'
import MessagePopup from './Components/MessagePopup';
import reducers from './Reducers';

const store=createStore(reducers)

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
