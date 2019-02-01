import React from 'react';

class PlantPotComp extends React.Component {
  state = {
    count: 0,
    toggle: false
  };

  render() {
    return (
      <div>
        <div className="pot__position">
          <div className="pot-top"></div>
          <div className="pot"></div>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default PlantPotComp;
