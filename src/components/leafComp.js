import React from 'react';

class LeafComp extends React.Component {
  state = {
    count : 0,
    toggle: false
  }
  render(){

    // if (this.state.count === App.state.count){
    //   this.setState({ toggle: true });
    // }
    console.log(this.state.count);

  return(
    <div></div>
  )
}
}

export default LeafComp;
