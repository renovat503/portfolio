import React, { Component } from 'react';
import '../styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import me from '../images/me.png';
import { Link } from 'react-router-dom';


class About extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="about-wrapper">
                    <span className="intro">HI THERE , I'M</span>
                    <span className="renova">renova.</span>
                    <span className="dd">DESIGNER + DEVELOPER</span>
                    <span className="front-end">I'm a software Engineer based in silicon slopes, Utah.</span>
                    <span className="front-end">I Specialize in designing and developing beautiful UI that gives a</span>
                    <span className="front-end"> user an exceptional digital experience.</span>
                    <Link to="/work"><button className = "hire-me">See Work</button></Link>

                    <span className="socials">
                        <a target="_blank" href="https://www.instagram.com/renova_99/"><span className="social"><FontAwesomeIcon icon={faInstagram} /></span></a>
                        <a target="_blank" href="https://dribbble.com/Renny99"><span className="social"><FontAwesomeIcon icon={faDribbble} /></span></a>
                        <a target="_blank" href="https://twitter.com/MbonimpaRenny"><span className="social"><FontAwesomeIcon icon={faTwitter} /></span></a>
                        <a target="_blank" href="https://www.linkedin.com/in/renova-mbonimpa-823451113/"><span className="social"><FontAwesomeIcon icon={faLinkedin} /></span></a>
                        
                        
                    </span >
                    <img className="me" src={me} />
                   
                </div>

            </React.Fragment>
        );
    }
}

export default About;