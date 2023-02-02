import { useState } from 'react';
import '../App.css';
import { Questions } from '../helpers/Questions';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const { score, setScore } = useContext(GameStateContext);

  const Chosen = (option) => {
    setOptionChosen(option);
  };

  const NextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="Quiz">
      <h2>{Questions[currentQuestion].prompt}</h2>
      <button onClick={() => Chosen('optionA')}>
        {Questions[currentQuestion].optionA}
      </button>
      <button onClick={() => Chosen('optionB')}>
        {Questions[currentQuestion].optionB}
      </button>
      <button onClick={() => Chosen('optionC')}>
        {Questions[currentQuestion].optionC}
      </button>
      <button onClick={() => Chosen('optionD')}>
        {Questions[currentQuestion].optionD}
      </button>
      <button onClick={NextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;
