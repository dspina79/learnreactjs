import React, { Component } from 'react';

class PriceCalculator extends React.Component {
    
    calculateTotalsWithShipping() {
        const rateItem = 0.23;
        let totalItems = 0;
        for (counter in this.props.counter) {
            totalItems += counter.value;
        }

        return totalItems * rateItem;
    }
    
    render() { 
        return <React.Fragment>
            <h3>Price Calculator</h3>
        </React.Fragment>;
    }
}
 
export default PriceCalculator;