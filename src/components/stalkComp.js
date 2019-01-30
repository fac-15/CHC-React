import React from 'react';
// import getStalk from "../utils/getStalk.js";

export default class StalkComp extends React.Component {
  state = {
    count: 0,
    toggle: false,
    timer: 0
  };

  start = () => {

    //Space bar key code below
    // if(e.keyCode = 32) {
    //
    // }

      this.setState((prevState) => {
        return { count: prevState.count += 1}
      })
  }

  render() {
    return (
      <div>
        <p> {this.state.count} </p>
        <button onClick={this.start}>Click</button>
      </div>
    )
  }
}
