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
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const {count, address} = this.state;
        return count == 0 ? 'Zero' : count;
    }
}
 
export default Counter;