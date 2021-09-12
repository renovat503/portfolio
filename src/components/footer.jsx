import React, { Component } from 'react';
import '../styles/footer.css';
import { VscSourceControl } from "react-icons/vsc";
import { VscCloudUpload } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { VscWarning } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";
class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="footer-container">
                    <div className="footer-text-container-div">
                        <span className="footer-text"><VscSourceControl /> master*</span>
                    </div>

                    <span className="upload-icon"><VscCloudUpload className="footer-icon" /></span>
                    <span className="error-icon"><VscError className="footer-icon" /></span>
                    <span className="warning-icon"><VscWarning className="footer-icon" /></span>
                    <span className="bell-icon"><VscBell className="footer-icon" /></span>
                    <span className="feedback-icon"><VscFeedback className="footer-icon" /></span>
                    <div className="js">

                        <span className="javascript-react">JavaScript React</span>
                    </div>
                    <span className="lf">LF</span>
                    <span className="utf-8">UTF-8</span>
                    <span className="spaces4">Spaces : 4</span>
                    <span className="ln32">Ln 32,Col 57</span>



                </div>
            </React.Fragment>
        );
    }
}

export default Footer;