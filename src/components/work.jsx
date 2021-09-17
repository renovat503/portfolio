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
                    <Card textOne="coming" textTwo="soon" stacks="HTML/CSS  JS"/>
                    <Card textOne="coming" textTwo="soon" stacks="HTML/CSS  JS PHP"/>
                    <DesignCard textOne="coming" textTwo="soon" stacks="PS FIGMA"/>
                    <DesignCard textOne="coming" textTwo="soon" stacks="PS FIGMA"/>
                    <DesignCard textOne="coming" textTwo="soon" stacks="PS FIGMA"/>
                    
                    
                </div>
                
            </React.Fragment>
        );
    }
}

export default Work;