import React, { Component } from 'react';
import '../styles/menusj.css';
import { VscJson } from "react-icons/vsc";
class Menusj extends Component {
    state = {}
    render() {
        return (
            <div className="menusj-container">
                <span><VscJson className="menusj-icon" /></span>
                <span className="menusj-name">{this.props.menuname}</span>
            </div>
        );
    }
}

export default Menusj;