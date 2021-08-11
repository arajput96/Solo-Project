import React, { Component } from 'react';
// import React, { useState } from 'react';
import GameBoard from './GameBoard.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <GameBoard/>
        {/* Test App JSX */}
      </div>
    )
  }
}

export default App;