import React from 'react';
import StalkComp from './stalkComp';
import FlowerComp from './flowerComp';

export default class App extends React.Component {
  state = {
    stalk: 0,
    hello: 'im working'
  }

  render() {
    return (
      <div>
        <StalkComp />
        <FlowerComp />
      </div>
    );
  }
}
