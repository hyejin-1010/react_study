import React, { Component } from 'react';

class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
            return;
        }
    }

    render() {
        const { location } = this.props;
        if (!location.state) { return null; }

        return <div>{location.state.title}</div>
    }
}

export default Detail;
