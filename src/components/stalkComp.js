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
      <div>
        <div className="stalk stalk-0"></div>
        <div className="stalk stalk-1"></div>
        <div className="stalk stalk-2"></div>
        <div className="stalk stalk-3"></div>
        <div className="stalk stalk-4"></div>
        <div className="stalk stalk-5"></div>
        <div className="stalk stalk-6"></div>
        <div className="stalk stalk-7"></div>
        <div className="stalk stalk-8"></div>
      </div>
    )
  }
}
