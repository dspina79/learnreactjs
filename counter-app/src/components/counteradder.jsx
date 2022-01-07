import React, { Component } from 'react';

class CounterAdder extends React.Component {
    addProduct() {
        const textbox = document.getElementById("adder");
        const value = textbox.value;
        this.props.onAdd(value);
        textbox.value = "";
    }

    render() { 
        return <React.Fragment>
            <label for="adder">Product Name</label>
            <input className="form-control" id="adder" key="adder" type="text" maxLength="20"></input>
            <button className="btn btn-primary btn-sm" onClick={() => this.props.onAdd(document.getElementById("adder").value)}>Add</button>
        </React.Fragment>;
    }
}
 
export default CounterAdder;