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
                    <a target="_blank"href="https://message01.netlify.app/"><Card textOne="Message" 
                        textTwo="Application" 
                        stacks="HTML/CSS  JS" 
                        linkTwo="https://github.com/renovat503/message-application" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://message01.netlify.app/"
                        /></a>

                    <a target="_blank"href="https://umbrella99.netlify.app/"><Card textOne="Weather" 
                        textTwo="Application" 
                        stacks="HTML/CSS  JS" 
                        linkTwo="https://github.com/renovat503/weather_version_1.1" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://umbrella99.netlify.app/"
                        /></a>
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