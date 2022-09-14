import React from 'react';
import './Notification.css';

const Notification = ({ error, message }) => {
  if (!error) {
    return <div className="success">{message}</div>;
  }

  return <div className="error">{error}</div>;
};

export default Notification;
