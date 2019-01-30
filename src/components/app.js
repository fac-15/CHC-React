import React from 'react';
import LeafComp from './leafComp';
// import PlantPotComp from './plantPotComp';
export default class App extends React.Component {
  state = {
    stalk: 0,
    leaf: 222,
    flower: 0,
    count: 0,
    timer: 0,
    timerId: 0
  }

  render() {
    return (
      <div>
        <LeafComp />
        <p> leaf {this.state.leaf}</p>
        <p> count {this.state.count}</p>
        <button
          onClick= {() =>
            this.setState(prevState => {
              return { count: prevState.count += 1 }})
          }
        > click </button>
      </div>
    )
  }
}
