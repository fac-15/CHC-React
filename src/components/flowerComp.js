import React from "react";
// import getFlower from "../utils/getFlower.js";

class FlowerComp extends React.Component {
  state = {
    count: 0,
    visible: false
  };

  render() {
    return (
      <div>
        <div className={this.props.gameOver ? "flower" : ""} />
      </div>
    );
  }
}

export default FlowerComp;
