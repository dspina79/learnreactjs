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

    handleDelete = (counterId) => {
        console.log('Deleting...' + counterId);
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: newCounters});
    }

    handleReset = () => {
        const resetCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        console.log(resetCounters);
        this.setState({resetCounters});
    }


    render() { 
        return <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(c => 
                <Counter key={c.id} counter={c} onDelete={this.handleDelete}>
                    <h2>{c.title}</h2>
                </Counter>
            )}
        </div>;
    }
}
 
export default Counters;