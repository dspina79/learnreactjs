import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    render() { 
        return <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(c => 
                <Counter key={c.id} counter={c} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete}>
                    <h2>{c.title}</h2>
                </Counter>
            )}
        </div>;
    }
}
 
export default Counters;