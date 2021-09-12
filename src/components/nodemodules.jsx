import React, { Component } from 'react';
import '../styles/nodemodules.css';
import { VscChevronRight } from "react-icons/vsc";
class NodeModules extends Component {

    render() {
        return (
            <div className="node-menu-container">
                <span className="node-dropdown-icon"><VscChevronRight /></span>
                <span className="node-modules-text">{this.props.title}</span>
            </div>
        );
    }
}

export default NodeModules;

