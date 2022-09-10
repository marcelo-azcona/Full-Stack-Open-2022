import { useState } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCount] = useState(0);

  const clickCount = () => setCount(() => count + 1);

  const countGoodHandler = () => {
    clickCount();
    setGood(() => good + 1);
  };

  const countNeuralHandler = () => {
    clickCount();
    setNeutral(() => neutral + 1);
  };

  const countBadHandler = () => {
    clickCount();
    setBad(() => bad - 1);
  };

  return (
    <div>
      <Feedback
        onGoodClick={countGoodHandler}
        onNeutralClick={countNeuralHandler}
        onBadClick={countBadHandler}
      />
      <Statistics
        count={count}
        goodPoints={good}
        neutralPoints={neutral}
        badPoints={bad}
      />
    </div>
  );
};

export default App;
