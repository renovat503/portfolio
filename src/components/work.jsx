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
                    <a target="_blank"href="https://payinapo.com"><Card textOne="Payinapo" 
                        textTwo="Web app" 
                        stacks="React/.Net Core JS" 
                        linkTwo="https://github.com/renovat503/" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://payinapo.com"
                        /></a>
                    <a target="_blank"href="https://play.google.com/store/apps/details?id=com.renova.payinapo"><Card textOne="Payinapo" 
                        textTwo="Mobile app" 
                        stacks="RN/.Net Core JS" 
                        linkTwo="https://github.com/renovat503/" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://play.google.com/store/apps/details?id=com.renova.payinapo"
                        /></a>
                    <a target="_blank"href="https://sneakx.netlify.app/"><Card textOne="Shoebox" 
                        textTwo="Marketplace" 
                        stacks="Chakra UI  JS" 
                        linkTwo="https://github.com/renovat503/shoebox" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://sneakx.netlify.app/"
                        /></a>
                    <a target="_blank"href="https://visitlittlelemon.netlify.app/"><Card textOne="Little Lemon" 
                        textTwo="Home page" 
                        stacks="Chakra UI  JS" 
                        linkTwo="https://github.com/renovat503/Capstone" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://visitlittlelemon.netlify.app/"
                        /></a>
                     <a target="_blank"href="https://meetup99.netlify.app/"><Card textOne="Meetup" 
                        textTwo="Clone" 
                        stacks="HTML/CSS  JS" 
                        linkTwo="https://github.com/renovat503/netflix_clone" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://meetup99.netlify.app/"
                        /></a>

                    <a target="_blank"href="https://umbrella99.netlify.app/"><Card textOne="Weather" 
                        textTwo="Application" 
                        stacks="HTML/CSS  JS" 
                        linkTwo="https://github.com/renovat503/weather_version_1.1" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://umbrella99.netlify.app/"
                        /></a>

                    <a target="_blank"href="https://netflix99.netlify.app/"><Card textOne="Netflix" 
                        textTwo="Clone" 
                        stacks="HTML/CSS  JS" 
                        linkTwo="https://github.com/renovat503/netflix_clone" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://netflix99.netlify.app/"
                        /></a>
                     <a target="_blank"href="https://message01.netlify.app/"><Card textOne="Message" 
                        textTwo="Application" 
                        stacks="HTML/CSS  JS" 
                        linkTwo="https://github.com/renovat503/message-application" 
                        linkThree = "https://dribbble.com/Renny99"
                        link = "https://message01.netlify.app/"
                        /></a>
                    <Card textOne="coming" textTwo="soon" stacks="HTML/CSS  JS PHP"/>
                    <DesignCard textOne="coming" textTwo="soon" stacks="PS FIGMA"/>
                    
                    
                </div>
                
            </React.Fragment>
        );
    }
}

export default Work;
