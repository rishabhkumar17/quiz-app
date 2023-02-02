import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';

const Menu = () => {
  const { gameState, setGameState } = useContext(GameStateContext); //access state globally
  return (
    <div className="Menu">
      <label>Enter Your Name</label>
      <input type="text" placeholder="Ex." />
      <button onClick={() => setGameState('Playing')}>Start Quiz</button>
    </div>
  );
};

export default Menu;
