import React, { Component } from 'react';
import '../styles/pagearea.css';
import Tabs from '../components/tabs';
import FilePath from '../components/filepath';
import ContentArea from '../components/contentarea';
import Side from './side';
import Explorer from './explorer';
class PageArea extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="page-area-wrapper">
                    <div className='side-icons'>
                        <Side/>
                    </div>
                    <div>
                        <Explorer/>
                    </div>
                    <div>
                        <Tabs />
                        <FilePath />
                        <ContentArea />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PageArea;