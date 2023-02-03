import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';
import { Questions } from '../helpers/Questions';

const EndScreen = () => {
  const { score, setScore, setGameState, userName } =
    useContext(GameStateContext);

  const RestartQuiz = () => {
    setScore(0);
    setGameState('Menu');
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h2>{userName} Score</h2>
      <h2>
        {score} / {Questions.length}
      </h2>
      <button onClick={RestartQuiz} id="nextQuestion">
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
