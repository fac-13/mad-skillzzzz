import React from 'react';
import App from '../components/app';
import { connect } from 'react-redux';
import { setQuizQuestions } from '../actions/actions';

const mapStateToProps = state => {
  return {
    quizData: state.quizData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCategorySelect: quizData => dispatch(setQuizQuestions(quizData))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
