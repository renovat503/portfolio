import React, { Component } from 'react';
import '../styles/readme.css';
import { VscInfo } from "react-icons/vsc";
class Readme extends Component {

    render() {
        return (
            <div className="readme-menu-container">
                <span className="readme-dropdown-icon"><VscInfo /></span>
                <span className="readme-text">{this.props.title}</span>
            </div>
        );
    }
}

export default Readme;