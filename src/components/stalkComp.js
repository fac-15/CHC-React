import React from 'react';

const StalkComp = ({ id }) => {

    return (
      <div>
        <div className="stalk" key={id} id={id}></div>
      </div>
    )
  }

export default StalkComp
