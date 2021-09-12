import React, { Component } from 'react';
import '../styles/menusc.css';
class Menusc extends Component {
    state = {}
    render() {
        return (
            <div className="menusc-container">
                <span className="menusc-icon">#</span>
                <span className="menusc-name">{this.props.menuname}</span>
            </div>
        );
    }
}

export default Menusc;