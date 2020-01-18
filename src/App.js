import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
     return (
       <header>
         <h1>WEB</h1>
         world wide web
       </header>
     );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    )
  }
}

class App extends Component {
  /*
  반드시 react는 하나의 태그 안 쪽에 나머지 태그들이 있어야 한다.
   --> 가장 바깥 쪽에는 태그 하나가 있어야 한다. = 없으면 error가 남
  */
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
