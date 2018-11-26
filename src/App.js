import React, { Component } from 'react'
import './App.less'
import Decorate from '@components/decorate'

class App extends Component {
  render() {
    return (
      <div className="tetris">
      <Decorate />
      </div>
    );
  }
}

export default App;
