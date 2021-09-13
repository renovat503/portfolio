import React, { Component } from 'react';
import '../styles/pagearea.css';
import Tabs from '../components/tabs';
import FilePath from '../components/filepath';
import ContentArea from '../components/contentarea';
class PageArea extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="page-area-wrapper">
                    <Tabs />
                    <FilePath />
                    <ContentArea />
                </div>
            </React.Fragment>
        );
    }
}

export default PageArea;