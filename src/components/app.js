import React from 'react';
import Button from './button';
import Card from './card';
import { getQuiz, getSession } from '../utils/getQuiz';
import Score from './score';

const quizzes = [
  { id: 17, title: 'Science and Nature' },
  { id: 26, title: 'Celebrities' },
  { id: 21, title: 'Sports' },
  { id: 27, title: 'Animals' },
  { id: 20, title: 'Mythology' },
  { id: 9, title: 'General Knowledge' }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightAnswers: 0,
      currentQuestion: 0
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.sessionToken = null;
  }

  componentDidMount() {
    getSession().then(session => {
      this.sessionToken = session.token;
    });
  }

  fetchCategory(categoryId) {
    return () => {
      const { setQuizData, markCategorySelected } = this.props;
      getQuiz(categoryId, this.sessionToken)
        .then(quizData => setQuizData(quizData.results))
        .then(() => markCategorySelected());
    };
  }

  restartGame() {
    const { resetGame } = this.props;
    resetGame();
    return this.setState({
      rightAnswers: 0,
      currentQuestion: 0
    });
  }

  checkAnswer(answer, correctAnswer) {
    return () => {
      if (answer === correctAnswer) {
        this.setState(({ rightAnswers: previousCount }) => ({
          rightAnswers: previousCount + 1
        }));
      }
      this.setState(({ currentQuestion: previousQuestion }) => ({
        currentQuestion: previousQuestion + 1
      }));
    };
  }

  populateQuizCard = (record, index) => {
    const { correct_answer, incorrect_answers, difficulty, question } = record;
    return (
      <Card
        key={index}
        checkAnswerFn={this.checkAnswer}
        question={atob(question)}
        duration={10}
        difficulty={atob(difficulty)}
        correctAnswer={atob(correct_answer)}
        wrongAnswers={incorrect_answers.map(x => atob(x))}
      />
    );
  };

  render() {
    const { quizData, categorySelected } = this.props;
    const { rightAnswers, currentQuestion } = this.state;
    return (
      <div className="app">
        {!categorySelected && <h1>Pick a Category</h1>}
        {!categorySelected &&
          quizzes.map((item, i) => {
            return (
              <Button
                key={i}
                onClick={this.fetchCategory(item.id)}
                id={item.id}
              >
                {item.title}
              </Button>
            );
          })}
        {quizData && currentQuestion < 10
          ? this.populateQuizCard(quizData[currentQuestion], currentQuestion)
          : ''}
        {quizData && currentQuestion === 10 ? (
          <Score score={rightAnswers} refresh={this.restartGame} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
