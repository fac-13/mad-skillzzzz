import React from 'react';
import App from '../components/app';
import { connect } from 'react-redux';
import {
  setQuizQuestions,
  markCategorySelected,
  resetGame,
  incrementRightAnswers,
  updateCurrentQuestion,
  currentQuestion
} from '../actions/actions';

const mapStateToProps = state => {
  return {
    quizData: state.quizData,
    categorySelected: state.categorySelected,
    currentQuestion: state.currentQuestion,
    rightAnswers: state.rightAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuizData: quizData => dispatch(setQuizQuestions(quizData)),
    markCategorySelected: () => dispatch(markCategorySelected()),
    resetGame: () => dispatch(resetGame()),
    incrementRightAnswers: () => dispatch(incrementRightAnswers()),
    updateCurrentQuestion: () =>
      dispatch(updateCurrentQuestion(currentQuestion))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
