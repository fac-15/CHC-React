import React from "react";
import StalkComp from "./stalkComp";
import LeafComp from "./leafComp";
import FlowerComp from "./flowerComp";
import PlantPotComp from "./plantPotComp";
import CloudComp from "./cloudComp";

export default class App extends React.Component {
  state = {
    stalks: 0,
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

    // const updateStalks = () => {
    //   if (this.state.totalCount % 3 === 0) {
    //     this.setState({ stalks: this.state.stalks + 1 });
    //   }
    // };

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
    const stalks = Array.from({
      length: Math.floor(this.state.totalCount / 3)
    });

    return (
      <div>
        <p className="timer"> timer: {this.state.timer}</p>
        <p className="timer"> points: {this.state.totalCount}</p>
        <p className="timer"> stalks: {this.state.stalks}</p>
        <button onClick={this.start}>Begin</button>
        <button onClick={this.pointCounter}>Water Me!</button>
        <div className="container">
          <CloudComp />
          <div />
          <FlowerComp />
          <LeafComp />
          {stalks.map((stalk, id) => (
            <StalkComp id={id} />
          ))}
          <PlantPotComp />
        </div>
      </div>
    );
  }
}
