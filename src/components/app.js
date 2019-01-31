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
    count: 0,
    timer: 0,
    timerId: 0,
    active: false
  }

  start = () => {

    const counter = () => {
      this.setState((prevState) => {
        // console.log('im clicked');
        return { count: prevState.timer +=1 }
      })
    }

    if(!this.state.active) {
      this.setState((prevState) => {
        const id = setInterval(counter, 1000)
        return { active: true, timerId: id };
      })
    }

        // this.setState((prevState) => {
        //   // e = event.window.target;
        //   // onKeypress = ()
        //     return { count: prevState.count += 1}
        // })
  }

    // onKeyPress(e){
    //   console.log(e.key);
    // }

    // onClick={(e) => this.onKeyPress(e)}

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
