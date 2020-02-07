import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import counterApp from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(counterApp);

/**
 * 렌더링 될 때 Redux의 컴포넌트인 Provider에 store를 설정해주면
 * 그 하위 컴포넌튿르에 따로 parent-child 구조로 전달해주지 앟아도
 * connect 될 때 store에 접근할 수 있게 해준다.
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
