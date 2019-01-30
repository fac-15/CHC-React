import App from './app.js';
import React from 'react';

export default class LeafComp extends React.Component {
  state = {
    count : 667,
    toggle: false
  }
  render(){

    // if (this.state.count === App.state.count){
    //   this.setState({ toggle: true });
    // }
    console.log(this.state.count);

  return(
    <p> leaf count {this.state.count} </p>
  )
}
}
