import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, children, id }) => {
  return (
    <button onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
