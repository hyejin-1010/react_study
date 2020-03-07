import React, { Component } from 'react';
import store from '../store';
import AddNumber from '../components/AddNumber';

export default class extends Component {
    render() {
        return <AddNumber onClick={function(size) {
            store.dispatch({ type: 'INCREMENT', size });
        }.bind(this)}></AddNumber>
    }
}