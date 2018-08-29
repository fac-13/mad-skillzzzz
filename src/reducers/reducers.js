import {
  setQuizQuestions,
  incrementRightAnswers,
  updateCurrentQuestion,
  markCategorySelected,
  resetGame
} from '../actions/actions';

export const initialState = {
  quizData: null,
  rightAnswers: 0,
  currentQuestion: 0,
  categorySelected: false
};

export const updateState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUIZ_QUESTIONS':
      return Object.assign({}, state, {
        quizData: action.quizData
      });
    case 'INCREMENT_RIGHT_ANSWERS':
      return Object.assign({}, state, {
        rightAnswers: state.rightAnswers + 1
      });
    case 'UPDATE_CURRENT_QUESTION':
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1
      });
    case 'MARK_CATEGORY_SELECTED':
      return Object.assign({}, state, {
        categorySelected: true
      });
    case 'RESET_GAME':
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
