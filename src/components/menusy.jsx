import React, { Component } from 'react';
import '../styles/menusy.css';
class Menusy extends Component {
    state = {}
    render() {
        return (
            <div className="menusy-container">
                <span className="menusy-icon">JS</span>
                <span className="menusy-name">{this.props.menuname}</span>
            </div>
        );
    }
}

export default Menusy;