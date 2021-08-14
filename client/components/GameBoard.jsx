import React, { Component } from 'react';
import Circle from './Circle.jsx';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }

    this.scoreHandler = this.scoreHandler.bind(this);
  }

  scoreHandler() {
    this.setState({score: this.state.score+1})
  }
  
  render() {
    return (
      // <div>GameBoard Component Test</div>,
      <Container maxWidth='sm'>
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='space-around'
          width='500px' 
          height ='50px' 
        >
          <Button variant='contained' color='primary'>Start Game</Button>
          <Button variant='contained' color='primary'>Score: {this.state.score}</Button>
        </Box>
        
        <Box width='500px' height ='500px' bgcolor ='success.main' border={3}>
          <Circle scoreHandler={this.scoreHandler}/>
        </Box> 
      </Container>
    )
  }
}

export default GameBoard;