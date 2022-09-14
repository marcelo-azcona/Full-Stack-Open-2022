import React from 'react';

const Button = ({ id, onDeletePhone }) => {
  return <button onClick={onDeletePhone.bind(null, id)}>Delete</button>;
};

export default Button;
