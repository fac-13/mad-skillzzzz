import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button;