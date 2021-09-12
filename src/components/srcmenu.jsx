import React, { Component } from 'react';
import '../styles/srcmenu.css';
import { VscChevronDown } from "react-icons/vsc";
class SrcMenu extends Component {

    render() {
        return (
            <div className="src-menu-container">
                <span className="src-dropdown-icon"><VscChevronDown /></span>
                <span className="src-text">{this.props.title}</span>
            </div>
        );
    }
}

export default SrcMenu;