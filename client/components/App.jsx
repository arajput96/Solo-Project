import React, { Component } from 'react';
// import React, { useState } from 'react';
import GameBoard from './GameBoard.jsx';
import Authentication from './Authentication.jsx';
// import background from '../../assets/Gfuel Background.jpeg'

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div>
          <Authentication/>
          <GameBoard/>
          {/* Test App JSX */}
        </div>
      </div>
    )
  }
}

export default App;