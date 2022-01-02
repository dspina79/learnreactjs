import React, { Component } from 'react';

class Counter extends React.Component {
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    constructor(props) {
        super(props);
    }
 
    render() { 
        return (
            <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={this.getClasses()}>{this.formatCount()}</span>
                <button style={{fontSize: 16}} onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button style={{fontSize: 16}} onClick={ () => this.props.onDecrement(this.props.counter)} className="btn btn-warning btn-sm">Decrement</button>
                <button style={{fontSize: 16}} onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
            </React.Fragment>
        );
    }

    getClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "alert-warning" : "alert-primary";
        return classes;
    }

    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;