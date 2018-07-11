import React from 'react';
import Button from './button';
import Card from './card';
import { getQuiz, getSession } from '../utils/getQuiz';
import Score from './score';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      quizData: null,
      rightAnswers: 0,
      currentQuestion: 0,
      categorySelected: false
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  componentDidMount() {
    getSession().then((session) =>
      this.setState({ sessionToken: session.token })
    );
  }

  fetchCategory(categoryId, sessionToken) {
    return () => {
      this.setState({ categorySelected: true });
      getQuiz(categoryId, sessionToken).then((quiz) =>
        this.setState({ quizData: quiz.results })
      );
    };
  }

  restartGame() {
    return this.setState({
      quizData: null,
      rightAnswers: 0,
      currentQuestion: 0,
      categorySelected: false
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
    const { categorySelected } = this.state;
    const {
      category,
      correct_answer,
      incorrect_answers,
      difficulty,
      question,
      type
    } = record;
    return (
      <Card
        key={index}
        checkAnswerFn={this.checkAnswer}
        question={atob(question)}
        duration={10}
        difficulty={atob(difficulty)}
        correctAnswer={atob(correct_answer)}
        wrongAnswers={incorrect_answers.map((x) => atob(x))}
      />
    );
  };

  render() {
    const { categories } = this.props;
    const {
      sessionToken,
      quizData,
      rightAnswers,
      currentQuestion,
      categorySelected
    } = this.state;
    return (
      <div className="app">
        {!categorySelected && <h1>Pick a Category</h1>}
        {!categorySelected &&
          categories.map((item, i) => {
            return (
              <Button
                key={i}
                onClick={this.fetchCategory(item.id, sessionToken)}
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
