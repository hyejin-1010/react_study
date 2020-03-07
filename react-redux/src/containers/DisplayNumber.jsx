import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

// store subscribe 때 마다 호출
function mapStateToProps(reduxState) {
    return { number: reduxState.number };
}

export default connect(mapStateToProps)(DisplayNumber);

/*
import React, { Component } from 'react';
import store from '../store'


export default class extends Component {
    state = { number: store.getState().number };

    constructor(props) {
        super(props);
        store.subscribe(function() {
            this.setState({ number: store.getState().number });
        }.bind(this));
    }

    render() {
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}
*/