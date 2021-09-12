import React, { Component } from 'react';
import '../styles/card.css';
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";
class Card extends React.Component {
    render() { 
        return <React.Fragment>
                    
                        <div className = "card">
                            <div className="icons">
                                <span className="card-icon"><VscLinkExternal /></span>
                                <span className="card-icon"><VscGithub /></span>
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