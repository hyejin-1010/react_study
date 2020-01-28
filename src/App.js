import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('chloe test construcor');

    this.max_content_id = 3;

    /**
     * react에서는 state의 값이 바뀌면, 
     * 그 state를 가지고 있는 컴포넌트의 render함수가 다시 호출된다.
     * 그 render함수가 다시 호출됨에 따라 하위 컴포넌트들도 다시 호출된다.
     * ==> 화면이 다시 그려진다.
     */
    this.state = {
      mode: 'welcome',
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

  getReadContent() {
    return this.state.contents.find(content => content.id === this.state.selected_content_id) || {};
  }

  getContent() {
    var _title, _desc, _article, _content  = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        // add content to this.state.contents
        this.setState({
          contents: this.state.contents.concat({ id: ++ this.max_content_id, title: _title, desc: _desc }),
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc) {
        const contents = Array.from(this.state.contents);
        const index = contents.findIndex(content => content.id === _id);
        if (index > -1) {
          contents[index] = { id: _id, title: _title, desc: _desc };
        }
        this.setState({ contents, mode: 'read' });
      }.bind(this)}></UpdateContent>
    }

    return _article;
  }

  /*
  어떤 HTML을 그릴 것인가를 결정하는 함수

  반드시 react는 하나의 태그 안 쪽에 나머지 태그들이 있어야 한다.
   --> 가장 바깥 쪽에는 태그 하나가 있어야 한다. = 없으면 error가 남
  */
  render() {
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

        <Control onChangeMode={function(mode) {
          if (mode === 'delete') {
            if (window.confirm('really?')) {
              const contents = Array.from(this.state.contents);
              const index = contents.findIndex((content) => content.id === this.state.selected_content_id);
              if (index > -1) {
                contents.splice(index, 1);
                this.setState({ mode: 'welcome', contents });
              }
            }
          }
          this.setState({mode});
        }.bind(this)}></Control>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
