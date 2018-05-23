import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app";

let quizzes = new Map();
quizzes.set(17, "Science and Nature")
  .set(26, "Celebrities")
  .set(21, "Sports")
  .set(27, "Animals")
  .set(20, "Mythology")
  .set(9, "General Knowledge");


ReactDOM.render(<App quizCategories={quizzes} />, document.getElementById('root'));