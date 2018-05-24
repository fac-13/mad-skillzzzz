import React from 'react';
import Button from './button';
import { getQuiz } from '../utils/getQuiz';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: null
    };
  }

  fetchCategory(categoryId) {
    return () => {
      getQuiz(categoryId)
        .then((quiz) => this.setState({ quizData: quiz.results }))
        .then(() => console.log(this.state.quizData));
    };
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map((item, i) => {
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
      </div>
    );
  }
}
