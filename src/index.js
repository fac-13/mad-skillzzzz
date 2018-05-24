import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app";

let quizzes = ["17/Science and Nature", "26/Celebrities", "21/Sports", "27/Animals", "20/Mythology", "9/General Knowledge"];


ReactDOM.render(<App categories={quizzes} />, document.getElementById('root'));