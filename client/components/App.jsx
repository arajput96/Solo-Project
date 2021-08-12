import React, { Component } from 'react';
// import React, { useState } from 'react';
import GameBoard from './GameBoard.jsx';
import Authentication from './Authentication.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Authentication/>
        <GameBoard/>
        {/* Test App JSX */}
      </div>
    )
  }
}

export default App;