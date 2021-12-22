import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        address: {
            street: ""
        }
    };
    render() { 
        return (
        <React.Fragment>
            <span className="badge alert-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const {count, address} = this.state;
        return count == 0 ? 'Zero' : count;
    }
}
 
export default Counter;