import React from 'react';
import Button from './Button';

const Feedback = ({ onGoodClick, onBadClick, onNeutralClick }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={onGoodClick}>good</Button>
      <Button onClick={onNeutralClick}>neutral</Button>
      <Button onClick={onBadClick}>bad</Button>
    </>
  );
};

export default Feedback;
