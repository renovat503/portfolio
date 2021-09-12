import React, { Component } from 'react';
import '../styles/side.css';
import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscDebugAlt2 } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
class Side extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="side-container">
                    <div className="icon-container active">
                        <span><VscFiles className="side-icon" /></span>
                    </div>
                    <div className="icon-container">
                        <span><VscSearch className="side-icon" /></span>
                    </div>
                    <div className="icon-container">
                        <span><VscSourceControl className="side-icon" /></span>
                    </div>
                    <span className="changes">8</span>
                    <div className="icon-container">
                        <span><VscDebugAlt2 className="side-icon" /></span>
                    </div>
                    <div className="icon-container">
                        <span><VscExtensions className="side-icon" /></span>
                    </div>
                    <div className="icon-container github">
                        <span><VscGithubInverted className="side-icon" /></span>
                    </div>
                    <div className="icon-container settings">
                        <span><VscSettingsGear className="side-icon" /></span>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Side;