import { INCREMENT, DECREMENT, SET_DIFF } from '../actions'
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    };
}

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch (action.type) {
        default: return state;
    };
}

// combineReducers: 여러 개의 reducer를 한 개로 합칠 때 사용되는 redux 내장 메소드
// reducer를 여러 개로 분리하여 작성할 땐, 서로 직접적인 관계가 없어야 한다.
const counterApp = combineReducers({
    counter,
    extra
});
/**
 * 위 reducer를 사용하여 store를 만들게 되면 store의 구조는 다음과 같다.
 * {
 *  counter: { value: 0, diff: 1 },
 *   extra: { value: 'this_is_extra_reducer' }
 * }
 */

export default counterApp;