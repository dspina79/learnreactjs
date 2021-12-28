import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = {
        counters: [
            {id: 1, value: 4, title: "Counter A"},
            {id: 2, value: 0, title: "Counter B"},
            {id: 3, value: 0, title: "Counter C"},
            {id: 4, value: 0, title: "Counter D"}
        ]
    }
    render() { 
        return <div>
            {this.state.counters.map(c => 
                <Counter key={c.id} value={c.value}>
                    <h2>{c.title}</h2>
                </Counter>
            )}
        </div>;
    }
}
 
export default Counters;