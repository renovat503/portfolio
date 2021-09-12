import React, { Component } from 'react';
import '../styles/explorermenu.css';
import { VscEllipsis } from "react-icons/vsc";
class ExplorerMenu extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="explorer-menu-container">
                    <span className="explorer-text">EXPLORER</span>
                    <span className="explorer-icon"><VscEllipsis /></span>
                </div>
            </React.Fragment>
        );
    }
}

export default ExplorerMenu;