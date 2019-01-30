import React from 'react';

export default class App extends React.Component {
  state = {
    flower: 'Hello, i\'m a flower'
  }

  render() {
    return (
      <div>
        <p>{this.props.flower}</p>
      </div>
    )
  }
}
