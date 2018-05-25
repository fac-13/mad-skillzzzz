import React from 'react';
import Button from './button';
import Card from './card';
import { getQuiz } from '../utils/getQuiz';
import Score from './score';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: null,
      rightAnswers: 0,
      currentQuestion: 0,
      categorySelected: false,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(answer, correctAnswer) {
    return () => {
      console.log(answer === correctAnswer);
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
    const categorySelected = this.state.categorySelected;
    const {
      category,
      correct_answer,
      incorrect_answers,
      difficulty,
      question,
      type,
    } = record;
    return (
      <Card
        key={index}
        checkAnswerFn={this.checkAnswer}
        question={question}
        difficulty={difficulty}
        correctAnswer={correct_answer}
        wrongAnswers={incorrect_answers}
      />
    );
  };

  fetchCategory(categoryId) {
    return () => {
      this.setState({ categorySelected: true });
      getQuiz(categoryId)
        .then((quiz) => this.setState({ quizData: quiz.results }))
    };
  }

  render() {
    const { categories } = this.props;
    const { quizData, currentQuestion } = this.state;
    return (
      <div className="app">
        {!this.state.categorySelected && <h1>Pick a Category</h1>}
        {!this.state.categorySelected && categories.map((item, i) => {
          const values = item.split('/');
          return (
            <Button
              key={i}
              onClick={this.fetchCategory(values[0])}
              id={values[0]}
            >
              {values[1]}
            </Button>
          );
        })}
        {this.state.quizData && currentQuestion < 10
          ? this.populateQuizCard(quizData[currentQuestion], currentQuestion)
          : ''}
        {this.state.quizData && currentQuestion === 10 ? <Score score={this.state.rightAnswers} /> : ""}
      </div>
    );
  }
}
