import '../App.css';
import { Questions } from '../helpers/Questions';

const Quiz = () => {
  return <div className="Quiz">{Questions[0].prompt}</div>;
};

export default Quiz;
