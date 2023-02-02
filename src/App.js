import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';
import { GameStateContext } from './helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState('Menu');

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        {gameState === 'Menu' && <Menu />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
