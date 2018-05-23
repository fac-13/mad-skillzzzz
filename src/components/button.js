import React from 'react';
import ReactDOM from 'react-dom';

const Button = props => {

  return (
    <button>{props.children}</button>
  )
}

export default Button;