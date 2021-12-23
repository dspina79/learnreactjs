import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        address: {
            street: ""
        },
        tags: [
            {
                id: "tag1",
                name: "Action"
            },
            {
                id: "tag2",
                name: "Sci-Fi"
            },            
            {
                id: "tag3",
                name: "Suspense"
            },
        ]
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

 
    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getClasses()}>{this.formatCount()}</span>
                <button style={{fontSize: 16}} onClick={this.increment} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(t => <li key={t.id}>{t.name}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    increment() {
        console.log('About to increment');
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