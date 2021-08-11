import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class GameBoard extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      // <div>GameBoard Component Test</div>,
      <Box width='500px' bgcolor ='success.main'>
        Box
        <Button variant='contained' color='primary'>
          Hello Friends
        </Button>
      </Box> 
    )
  }
}

export default GameBoard;