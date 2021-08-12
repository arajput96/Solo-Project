import { Button, Fab } from '@material-ui/core';
import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftLocation: 444,
      topLocation: 444,
    }
  }

  // componentDidUpdate() {
  // }

  handleButtonClick() {
    function randomizePos() {
      return Math.floor(Math.random()*444);
    }
    this.setState({leftLocation: randomizePos(), topLocation: randomizePos()});
    this.props.scoreHandler();
  }

  render() {
    return (
      <Fab
        color="primary" 
        style={{
          postion:'absolute',
          left: `${this.state.leftLocation}px`,
          top: `${this.state.topLocation}px`,
          transitionDelay: `5ms`
        }}
        onClick={() => this.handleButtonClick()}
      ></Fab>
    )
  }
}

export default Circle;