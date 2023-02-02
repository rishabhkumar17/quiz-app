import { useState } from 'react';
import '../App.css';
import { Questions } from '../helpers/Questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const Chosen = (option) => {
    setOptionChosen(option);
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
    </div>
  );
};

export default Quiz;
