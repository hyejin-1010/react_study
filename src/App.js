import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  /*
  반드시 react는 하나의 태그 안 쪽에 나머지 태그들이 있어야 한다.
   --> 가장 바깥 쪽에는 태그 하나가 있어야 한다. = 없으면 error가 남
  */
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
