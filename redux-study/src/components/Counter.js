import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <h1>Value: {this.props.value}</h1>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);
/**
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * 
 * connect는 react-redux 내장 api
 * react component를 redux store에 '연결'해주는 함수
 * 리턴값: 특정 컴포넌트 클래스의 props를 store의 데이터에 연결시켜주는 또 다른 함수
 * 
 * 리던된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는 것이 아닌 새로운 컴포넌트를 return 한다.
 * 
 * mapStateToProps(state, [ownProps])
 *  - store의 state를 컴포넌의 props에 매핑.
 *  - ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props값에 접근할 수 있다.
 * 
 * mapDispatchToProps(dispatch, [ownProps])
 *  - 컴포넌트의 특정 함수형 props를 실행했을 때, 개발자가 지정한 action을 dispatch 하도록 설정
 *  - ownProps의 용도는 위 인수와 동일
 */

export default Counter;
