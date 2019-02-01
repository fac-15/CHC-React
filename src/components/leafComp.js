import React from 'react';

const LeafComp = ({id}) => {
  return(
    <div>
      <div className="leaf" key={id} id={id}></div>
    </div>
  )
}


export default LeafComp
