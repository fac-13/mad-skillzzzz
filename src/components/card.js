import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { difficulty, question } = this.props;
    return (
      <article>
        <header><p>{difficulty}</p></header>
        <div><p>{question}</p></div>
      </article>
    )
  }
}

