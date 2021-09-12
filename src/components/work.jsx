import React, { Component } from 'react';
import Card from '../components/card';
import DesignCard from '../components/designcard';
import '../styles/work.css';
class Work extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <Card textOne="Message" textTwo="Application" stacks="HTML/CSS  JS"/>
                    <Card textOne="Raba" textTwo="Exchange" stacks="HTML/CSS  JS"/>
                    <Card textOne="Anouncement" textTwo="System" stacks="HTML/CSS  JS PHP"/>
                    <DesignCard textOne="Anouncement" textTwo="System" stacks="PS FIGMA"/>
                    
                    
                </div>
                
            </React.Fragment>
        );
    }
}

export default Work;