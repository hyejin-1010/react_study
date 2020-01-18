import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('chloe test construcor');

    /**
     * react에서는 state의 값이 바뀌면, 
     * 그 state를 가지고 있는 컴포넌트의 render함수가 다시 호출된다.
     * 그 render함수가 다시 호출됨에 따라 하위 컴포넌트들도 다시 호출된다.
     * ==> 화면이 다시 그려진다.
     */
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {
        title: 'WEB',
        sub: 'world wide web!'
      },
      welcome: {
        title: 'Welcome',
        desc: 'Hello, React!!'
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'Css is for design' },
        { id: 3, title: 'JavaScript', desc: 'HTML is for interactive' }
      ]
    }
  }

  /*
  어떤 HTML을 그릴 것인가를 결정하는 함수

  반드시 react는 하나의 태그 안 쪽에 나머지 태그들이 있어야 한다.
   --> 가장 바깥 쪽에는 태그 하나가 있어야 한다. = 없으면 error가 남
  */
  render() {
    var _title, _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var data = this.state.contents.find(content => content.id === this.state.selected_content_id);
      console.log('chloe test data', data, this.state.selected_content_id); 
      if (data) {
        _title = data.title;
        _desc = data.desc;
      }
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            /**
             * 왜 직접 변경하지 않고 setState로 하는가?
             * contructor에서 직접 변경 가능
             * 
             * 이유: 직접 바꾸면 react입장에서는 몰래 바꾸는 것과 같다. 바꾼 걸 알 수가 없음.
             */
            this.setState({ mode: 'welcome' });
             /** this: render함수가 속해있는 그 컴포넌트 자신을 가리킨다.
             * 
             * event 함수 내에서는 this값이 없다.
             * -> 주입하는 방법? .bind(해당 함수 내 this값으로 주고 싶은 것)
             */
          }.bind(this)}></Subject>
        <header>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents} onChangePage={function(id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
