import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return(<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Current Product Count: {this.props.counters.length}</a>
        </nav>);
    }
}
 
export default NavBar;