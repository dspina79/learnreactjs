import './App.css';
import React, {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import CounterAdder from './components/counteradder';


class App extends React.Component {
  state = {
    counters: [
        {id: 1, value: 4, title: "Counter A"},
        {id: 2, value: 0, title: "Counter B"},
        {id: 3, value: 0, title: "Counter C"},
        {id: 4, value: 0, title: "Counter D"}
    ]
  }

  handleAdd = (productName) => {
    console.log("Adding " + productName)
    if (productName !== "") {
      let newId = 0;
      for(var i = 0; i < this.state.counters.length; i++) {
          const counter = this.state.counters[0];
          if (counter.id > newId) {
              newId = counter.Id;
          }
      }

      newId++;

      const newCounter = {id: newId, value: 1, title: productName};
      const newCounters = this.state.counters;
      newCounters.push(newCounter);
      console.log(newCounters);
      this.setState({counters: newCounters});
    }
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

  handleIncrement = (counter) => {
      this.handleCounterChange(counter, 1);
  }

  handleDecrement = (counter) => {
      this.handleCounterChange(counter, -1);
  }

  handleCounterChange = (counter, incrementAmount) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};

      if ((incrementAmount < 0 && counters[index].value > 0) || incrementAmount > 0) {
          counters[index].value += incrementAmount;
          this.setState({counters});
      }
  }

  render() {
    return (

      <React.Fragment>
      <NavBar counters={this.state.counters} />
      <CounterAdder onAdd={this.handleAdd} />
      <main className="container">
        <Counters onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        counters={this.state.counters} />
      </main>
      </React.Fragment>
    );
  }
}
export default App;
