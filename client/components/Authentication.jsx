import { Box, Button, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import 'regenerator-runtime/runtime'

class Authentication extends Component {
  constructor(props){
    super(props);

    this.state={
      username: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  // hnadleChangeUsername(e) {
  //   this.setState({username: e.target.value});
  //   console.log('Username: ', this.state.username);
  // }

  // hnadleChangePassword(e) {
  //   this.setState({password: e.target.value});
  //   console.log('Password: ', this.state.password);
  // }

  // handleSubmit(e) {
  //   // this.setState({username: e.target.value, password: e.target.value});
  //   console.log(`Username: ${this.state.username} Password: ${this.state.password}`);
  // }

  async handleLogin() {
    await this.setState({username: document.getElementById('usernameBox').value, password: document.getElementById('passwordBox').value});
    console.log(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return(
      <Box width='100%' display='flex' alignItems='flex-start' justifyContent='flex-end'>
          {/* <form onSubmit={this.handleSubmit}> */}
            <TextField id='usernameBox' label='Username'style={{marginRight:'10px'}}></TextField>
            <TextField id='passwordBox' label='Password' type='password'></TextField>
            <Button onClick={this.handleLogin} variant='contained' color='primary' style={{marginTop:'11px'}} >Submit</Button>
          {/* </form> */}
      </Box>
    )
  }
}

export default Authentication;