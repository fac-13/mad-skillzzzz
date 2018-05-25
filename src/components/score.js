import React from 'react';

const Score = ({ score }) => {
  return (
    <article>
      <h1>Your Score</h1>
      <p>{score}</p>
    </article>
  )
}

export default Score;