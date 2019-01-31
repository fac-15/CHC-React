import React from 'react';
// import getStalk from "../utils/getStalk.js";

export default class StalkComp extends React.Component {


      state = {
        count: 0,
        toggle: false,
        timer: 0
      };


  render() {
    return (
      <div className="stalkContainer">
        <div className="stalk" key={this.props.id}></div>
      </div>
    )
  }
}
