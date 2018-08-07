import React from 'react';
import App from '../components/app';
import { connect } from 'react-redux';
import { setQuizQuestions, markCategorySelected } from '../actions/actions';

const mapStateToProps = state => {
  return {
    quizData: state.quizData,
    categorySelected: state.categorySelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuizData: quizData => dispatch(setQuizQuestions(quizData)),
    markCategorySelected: () => dispatch(markCategorySelected())
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
