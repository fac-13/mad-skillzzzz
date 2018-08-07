export const setQuizQuestions = data => {
  return {
    type: 'SET_QUIZ_QUESTIONS',
    quizData: data
  };
};

export const setSessionToken = token => {
  return {
    type: 'SET_SESSION_TOKEN',
    sessionToken: token
  };
};

export const incrementRightAnswers = () => {
  return {
    type: 'INCREMENT_RIGHT_ANSWERS'
  };
};

export const updateCurrentQuestion = currentQuestion => {
  return {
    type: 'UPDATE_CURRENT_QUESTION',
    currentQuestion
  };
};

export const markCategorySelected = () => {
  return {
    type: 'MARK_CATEGORY_SELECTED'
  };
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  };
};
