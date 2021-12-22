import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        address: {
            street: ""
        }
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
       let classes = this.getClasses();
        return (
        <React.Fragment>
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button style={{fontSize: 16}} className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    getClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "alert-warning" : "alert-primary";
        return classes;
    }

    formatCount() {
        const {count, address} = this.state;
        return count == 0 ? 'Zero' : count;
    }
}
 
export default Counter;