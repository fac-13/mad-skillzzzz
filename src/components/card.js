import React from 'react';
import Button from './button';
import Timer from './timer';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      difficulty,
      question,
      duration,
      wrongAnswers,
      correctAnswer,
      checkAnswerFn
    } = this.props;
    const answers = [correctAnswer].concat(wrongAnswers).sort();
    return (
      <article className="card">
        <header>
          <span>{difficulty} | </span>
          <Timer duration={duration} timeoutFn={checkAnswerFn(true, false)} />
        </header>
        <div>
          <p>{question}</p>
        </div>
        <footer>
          {answers.map((answer, i) => {
            return (
              <Button key={i} onClick={checkAnswerFn(answer, correctAnswer)}>
                {answer}
              </Button>
            );
          })}
        </footer>
      </article>
    );
  }
}
