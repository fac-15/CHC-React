import React from 'react';
import StalkComp from './stalkComp';
import LeafComp from './leafComp';
import FlowerComp from './flowerComp';
import PlantPotComp from './plantPotComp';
import CloudComp from './cloudComp';

export default class App extends React.Component {
  state = {
    stalk: 0,
    leaf: 0,
    flower: 0,
    totalCount: 0,
    timer: 0,
    timerId: 0,
    active: false
  }

  start = () => {

    const timer = () => {
      this.setState((prevState) => {
        return { timer: prevState.timer +=1 }
      })
    }

    if(!this.state.active) {
      this.setState(() => {
        const id = setInterval(timer, 1000)
        return { active: true, timerId: id };
      })
    }
  }



  render() {
    return (
      <div>
      <p className="timer"> timer: {this.state.timer}</p>
      <button onClick={this.start}>Begin</button>
      <div className="container">
        <CloudComp/>
        <FlowerComp />
        <LeafComp />
        <StalkComp />
        <PlantPotComp />
      </div>
      </div>

    );
  }
}
