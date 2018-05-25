import React from 'react';
import Button from './button';
import "../../public/style.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      difficulty,
      question,
      wrongAnswers,
      correctAnswer,
      checkAnswerFn
    } = this.props;
    const answers = correctAnswer.split().concat(wrongAnswers);
    return (
      <article className="card">
        <header>
          <p>{difficulty}</p>
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
