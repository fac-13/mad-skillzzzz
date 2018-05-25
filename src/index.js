import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';

import App from './components/app';

let quizzes = [
  { id: 17, title: 'Science and Nature' },
  { id: 26, title: 'Celebrities' },
  { id: 21, title: 'Sports' },
  { id: 27, title: 'Animals' },
  { id: 20, title: 'Mythology' },
  { id: 9, title: 'General Knowledge' }
];

ReactDOM.render(<App categories={quizzes} />, document.getElementById('root'));
