import React from 'react';

const Score = ({ score }) => {
  return (
    <article className="scoreCard">
      <h1>Your Score</h1>
      <p>{score}</p>
    </article>
  )
}

export default Score;