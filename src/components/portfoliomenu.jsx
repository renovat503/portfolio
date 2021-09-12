import React, { Component } from 'react';
import '../styles/portfoliomenu.css';
import { VscChevronDown } from "react-icons/vsc";
import { VscNewFile } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";
import { VscRefresh } from "react-icons/vsc";
import { VscCollapseAll } from "react-icons/vsc";

class PortfolioMenu extends Component {

    render() {
        return (
            <div className="portfolio-menu-container">
                <span className="portfolio-dropdown-icon"><VscChevronDown /></span>
                <span className="portfolio-text">PORTFOLIO</span>
                <span className="portfolio-collapse-icon i"><VscCollapseAll /></span>
                <span className="portfolio-refresh-icon i"><VscRefresh /></span>
                <span className="portfolio-folder-icon i"><VscNewFolder /></span>
                <span className="portfolio-file-icon i"><VscNewFile /></span>




            </div>
        );
    }
}

export default PortfolioMenu;