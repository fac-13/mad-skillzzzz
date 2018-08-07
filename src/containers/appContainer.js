import React from 'react';
import App from '../components/app';
import { connect } from 'react-redux';
import {
  setQuizQuestions,
  markCategorySelected,
  resetGame
} from '../actions/actions';

const mapStateToProps = state => {
  return {
    quizData: state.quizData,
    categorySelected: state.categorySelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuizData: quizData => dispatch(setQuizQuestions(quizData)),
    markCategorySelected: () => dispatch(markCategorySelected()),
    resetGame: () => dispatch(resetGame())
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
