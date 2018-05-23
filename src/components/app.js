import React from 'react';
import Button from "./button";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: null,
    }
  }

  sayHi = () => {
    console.log(this.props.quizCategories);
  }

  render() {
    return <Button onClick={this.sayHi}>True</Button>;
  }
}