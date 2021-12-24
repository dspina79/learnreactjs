import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        address: {
            street: ""
        },
        tags: [
            
        ]
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>You need to add a tag.</p>

        return <ul>{this.state.tags.map(t => <li key={t.id}>{t.name}</li>)}</ul>
    }
 
    render() { 
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && "Click to add some items to the cart."}                
                {this.renderTags()}
            </React.Fragment>
        );
    }

}
 
export default Counter;