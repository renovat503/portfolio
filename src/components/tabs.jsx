import React, { Component } from 'react';
import '../styles/tabs.css';
import { VscEllipsis, VscSplitHorizontal, VscCompareChanges, VscChromeClose, VscJson } from "react-icons/vsc";
import { Link } from 'react-router-dom';
class Tabs extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="tabs-wrapper">
                    <div className="tab">
                        <span className="title"><Link to="/about">About</Link></span>
                        <VscChromeClose className="icon-close" />
                        <VscJson className="icon-json" />
                    </div>

                    <div className="tab">
                        <span className="title"><Link to="/work">Work</Link></span>
                        <VscChromeClose className="icon-close" />
                        <VscJson className="icon-json" />
                    </div>
                    <a target="_blank" href="https://drive.google.com/file/d/1BxcbSAfOl8ARybxCtZhyxhCtvHauqY6x/view?usp=sharing"><button className = "resume-button">Resume</button></a>
                    <div className="icons-wrapper">
                        <VscEllipsis className="icon" />
                        <VscSplitHorizontal className="icon" />
                        <VscCompareChanges className="icon" />
                    </div>



                </div>
            </React.Fragment>
        );
    }
}

export default Tabs;