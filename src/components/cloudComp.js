import React from 'react';
import '../../public/clouds.css';

class FlowerComp extends React.Component {
  state = {
    count: 0,
    toggle: false
  };

  render() {
    return (
      <div>
        <div className="cloud cloud-0"></div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
        <div className="cloud cloud-7"></div>
        <div className="cloud cloud-8"></div>
        <div className="cloud cloud-9"></div>
      </div>
    )
  }
}

export default FlowerComp;
