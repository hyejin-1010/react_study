import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;

        while (i < data.length) {
            lists.push(<li key={data[i].id}>
                <a
                    data-id={data[i].id}
                    href={"/content/" + data[i].id}
                    onClick={function(id, evt) {
                        evt.preventDefault();
                        // this.props.onChangePage(id);
                        this.props.onChangePage(evt.target.dataset.id);
                    }.bind(this, data[i].id)}>{data[i].title}</a>
            </li>);
            i ++;
        }

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default TOC;