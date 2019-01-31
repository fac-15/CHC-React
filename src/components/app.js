import React from "react";
import StalkComp from "./stalkComp";
import LeafComp from "./leafComp";
import FlowerComp from "./flowerComp";
import PlantPotComp from "./plantPotComp";
import CloudComp from "./cloudComp";

export default class App extends React.Component {
  state = {
    stalk: 0,
    leaf: 0,
    flower: 0,
    totalCount: 0,
    timer: 0,
    timerId: 0,
    opponentTimerId: 0,
    active: false
  };

  start = () => {
    const timer = () => {
      this.setState(prevState => {
        return { timer: (prevState.timer += 1) };
      });
    };

    const opponentTimer = () => {
      this.setState(prevState => {
        return { totalCount: (prevState.totalCount -= 3) };
      });
    };

    if (!this.state.active) {
      this.setState(() => {
        const id = setInterval(timer, 1000);
        const oppId = setInterval(opponentTimer, 4000);
        return { active: true, timerId: id, opponentTimerId: oppId };
      });
    }
  };
  pointCounter = () => {
    this.setState({ totalCount: this.state.totalCount + 1 });
  };

  render() {
    return (
      <div>
        <p className="timer"> timer: {this.state.timer}</p>
        <p className="timer"> points: {this.state.totalCount}</p>
        <button onClick={this.start}>Begin</button>
        <button onClick={this.pointCounter}>Water Me!</button>
        <div className="container">
          <CloudComp />
          <FlowerComp />
          <LeafComp />
          <StalkComp />
          <PlantPotComp />
        </div>
      </div>
    );
  }
}
