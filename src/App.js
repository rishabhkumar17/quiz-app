import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { useState } from 'react';
import { GameStateContext } from './helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState('Menu');
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{ gameState, setGameState, userName, setUserName }}
      >
        {gameState === 'Menu' && <Menu />}
        {gameState === 'Playing' && <Quiz />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
