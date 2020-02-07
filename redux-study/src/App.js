import React, { Component } from 'react';
import './App.css';
import increase from './index';

import Counter from './components/Counter';
import Buttons from './components/Buttons';
import Option from './components/Option';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={ {textAlign: 'center'}}>
        <Counter />
        <Option />
        <Buttons />
      </div>
    );
  }
}

export default App;
