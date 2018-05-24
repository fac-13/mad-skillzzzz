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
    console.log('hi!');
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map((item, i) => {
          const values = item.split('/');
          return <Button key={i} onClick={this.sayHi} id={values[0]}>{values[1]}</Button>;
        })}
      </div>
    )
  }
}