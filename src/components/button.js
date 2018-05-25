import React from 'react';
import ReactDOM from 'react-dom';
import "../../public/style.css";

const Button = ({ onClick, children, id }) => {
  return (
    <button className="button" onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
