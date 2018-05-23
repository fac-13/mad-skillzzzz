import React from 'react';
import Button from "./button";

export default class App extends React.Component {

  sayHi = () => {
    console.log('hi!');
  }

  render() {
    return <Button onClick={this.sayHi}>True</Button>;
  }
}