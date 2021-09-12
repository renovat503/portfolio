import React, { Component } from 'react';
import '../styles/explorer.css';
import ExplorerMenu from '../components/explorermenu';
import PortfolioMenu from '../components/portfoliomenu';
import NodeModules from './nodemodules';
import SrcMenu from './srcmenu';
import Menus from './menus';
import Menusc from './menusc';
import Menusy from './menusy';
import Menusj from './menusj';
import Readme from './readme';
import Gitgnore from './gitignore';
import { Link } from 'react-router-dom';


class Explorer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="explorer-container">
                    <ExplorerMenu />
                    <PortfolioMenu />
                    <NodeModules title="node_modules" />
                    <NodeModules title="public" />
                    <SrcMenu title="src" />
                    <div className="src-menu-contents">
                        <NodeModules title="components" />
                        <NodeModules title="styles" />
                        <Link to="/about"><Menusc menuname="about.css" /></Link>
                        <Link to="/work"><Menus menuname="work.js" /></Link>
                    </div>
                    <Gitgnore title=".gitignore" />
                    <Menusj menuname="package-lock.json" />
                    <Menusj menuname="package.json" />
                    <Readme title="README.md" />


                </div>
            </React.Fragment>
        );
    }
}

export default Explorer;