import React, { Component } from 'react';
import Circle from './Circle.jsx';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

class GameBoard extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      // <div>GameBoard Component Test</div>,
      <Container maxWidth='sm'>
        <Button variant='contained' color='primary'>Start Game</Button>
        <Box width='500px' height ='500px' bgcolor ='error.main'>
          <Circle/>
        </Box> 
      </Container>
    )
  }
}

export default GameBoard;