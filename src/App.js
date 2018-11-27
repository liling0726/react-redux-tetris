import React, { Component } from 'react'
import './App.less'
import Decorate from '@components/decorate'
import Keybord from '@components/keybord'
class App extends Component {
  render() {
    return (
      <div className="tetris">
      <Decorate>
        
      </Decorate>
      <Keybord />
      </div>
    );
  }
}

export default App;
