import React from 'react';

const Total = ({ parts }) => {
  const total = parts.reduce((total, num) => total + num.exercises, 0);

  return (
    <>
      <p>Total of {total} exercises</p>
    </>
  );
};

export default Total;
