import React, { Component } from 'react';
import '../styles/menus.css';
class Menus extends Component {
    state = {}
    render() {
        return (
            <div className="menus-container">
                <span className="menus-icon">JS</span>
                <span className="menus-name">{this.props.menuname}</span>
            </div>
        );
    }
}

export default Menus;