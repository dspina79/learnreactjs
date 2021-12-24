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

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecriment = this.handleDecriment.bind(this);
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>You need to add a tag.</p>

        return <ul>{this.state.tags.map(t => <li key={t.id}>{t.name}</li>)}</ul>
    }
 
    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getClasses()}>{this.formatCount()}</span>
                <button style={{fontSize: 16}} onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button style={{fontSize: 16}} onClick={this.handleDecriment} className="btn btn-warning btn-sm">Decrement</button>
            </React.Fragment>
        );
    }

    handleIncrement() {
        // set the state value using setState method
        this.setState({count: this.state.count + 1});
    }

    handleDecriment() {
        if (this.state.count > 0) this.setState({count: this.state.count - 1});
    }

    getClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "alert-warning" : "alert-primary";
        return classes;
    }

    formatCount() {
        const {count, address} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;