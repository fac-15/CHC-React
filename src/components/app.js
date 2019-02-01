import React from "react";
import StalkComp from "./stalkComp";
import LeafComp from "./leafComp";
import FlowerComp from "./flowerComp";
import PlantPotComp from "./plantPotComp";
import CloudComp from "./cloudComp";

export default class App extends React.Component {
  state = {
    stalks: 0,
    leafs: 0,
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
        const oppId = setInterval(opponentTimer, 3000);
        return { active: true, timerId: id, opponentTimerId: oppId };
      });
    }



    // if(this.state.active == true && this.state.totalCount == 29) {
    //   this.componentWillUpdate(() => {
    //     console.log('IVE WON!!!');
    //   })
    //
    // }



  };
  pointCounter = () => {
    this.setState({ totalCount: this.state.totalCount + 1 });
  };

  // flowerBlowm = () => {
  //   if(this.state.active === true && this.state.totalCount === 29) {
  //     this.setState({ flower: this.state.flower + 1 })
  //     console.log('FLOWER');
  //   }
  // }

  render() {
    const stalks = Array.from({
      length: Math.floor(this.state.totalCount / 3)
    });
    const leafs = Array.from({
      length: Math.floor(this.state.totalCount / 10)
    });



    return (
      <div>
        <p className="timer"> timer: {this.state.timer}</p>
        <p className="timer float-right"> points: {this.state.totalCount}</p>
        <div className="clear"></div>
        <button onClick={this.start}>Begin</button>
        <button onClick={this.pointCounter}>Water Me!</button>
        <div className="container">
          <CloudComp />
          <PlantPotComp />
          {stalks.map((stalk, id) => (
            <StalkComp id={id} />
          ))}
          {leafs.map((leaf, id) =>(
            <LeafComp id={id}/>
          ))}
          <FlowerComp />
        </div>
      </div>
    );
  }
}
