import React, { Component } from 'react';
import '../styles/card.css';
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDribbble} from '@fortawesome/free-brands-svg-icons';
class Card extends React.Component {
    render() { 
        return <React.Fragment>
                    
                        <div className = "card">
                            <div className="icons">
                                <span className="card-icon"><a target="_blank" href={this.props.link}><VscLinkExternal /></a></span>
                                <span className="card-icon"><a target="_blank" href={this.props.linkThree}><FontAwesomeIcon icon={faDribbble} ></FontAwesomeIcon></a></span>
                                <span className="card-icon"><a target="_blank" href={this.props.linkTwo}><VscGithub /></a></span>
                            </div>

                            <div className="card-text-container">
                                <span className="card-text">{this.props.textOne}</span>
                                <span className="card-text">{this.props.textTwo}</span>
                            </div>

                            <span className="stacks">{this.props.stacks}</span>

                        </div>
                 </React.Fragment>
    }
}
 
export default Card;