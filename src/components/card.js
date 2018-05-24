import React from 'react';
import Button from './button';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { difficulty, question, wrongAnswers, correctAnswer } = this.props;
    const answers = correctAnswer.split().concat(wrongAnswers);
    return (
      <article>
        <header><p>{difficulty}</p></header>
        <div><p>{question}</p></div>
        {answers.map((answer, i) => {
          return <Button key={i}>{answer}</Button>
        })}
      </article>
    )
  }
}

