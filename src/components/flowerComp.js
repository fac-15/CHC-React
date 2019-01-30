import React from 'react';
// import getFlower from "../utils/getFlower.js";

export default class FlowerComp extends React.Component {
  state = {
    count: 0,
    toggle: false
  };

  render() {
    return (
      <div>
        <div className="pot"></div>
      </div>
    )
  }
}
