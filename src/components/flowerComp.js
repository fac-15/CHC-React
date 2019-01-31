import React from 'react';
// import getFlower from "../utils/getFlower.js";

class FlowerComp extends React.Component {
  state = {
    count: 0,
    visible: false
  };

  render() {
    // if(!this.state.visible) {
    //
    // }

    return (
      <div>
        <div className="flower"></div>
      </div>
    )
  }
}

export default FlowerComp;
