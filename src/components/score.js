import React from 'react';
import Button from './button';

const Score = ({ refresh, score }) => {
  return (
    <article className="scoreCard">
      <h1>Your Score</h1>
      <p>{score}</p>
      <Button onClick={refresh}>Play Again</Button>
    </article>
  )
}

export default Score;