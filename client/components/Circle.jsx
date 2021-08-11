import { Button, Fab } from '@material-ui/core';
import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftLocation: null,
      topLocation: null,
    }
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <Fab color="primary" 
        style={{
          postion:'absolute',
          left:'100px',
          top:'100px'
        }}
      ></Fab>
    )
  }
}

export default Circle;