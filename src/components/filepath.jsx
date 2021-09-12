import React, { Component } from 'react';
import '../styles/filepath.css'
import { VscChevronRight, VscJson, VscSymbolClass } from "react-icons/vsc";
class FilePath extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="path-container">
                    <span className="path">src</span>
                    <VscChevronRight className="path-icon" />
                    <VscJson className="class-icon icon-jsn" />
                    <span className="path">Experience</span>
                    <VscChevronRight className="path-icon" />
                    <VscSymbolClass className="class-icon" />
                    <span className="path">Experience...</span>
                </div>
            </React.Fragment>
        );

    }
}

export default FilePath;