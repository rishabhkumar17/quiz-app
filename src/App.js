import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState('Menu');
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === 'Menu' && <Menu />}
    </div>
  );
}

export default App;
