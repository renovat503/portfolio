import React, { Component } from 'react';
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDribbble} from '@fortawesome/free-brands-svg-icons';
class DesignCard extends React.Component {
    render() { 
        return <React.Fragment>
                    
                        <div className = "card">
                            <div className="icons">
                                <span className="card-icon"><FontAwesomeIcon icon={faDribbble} /></span>
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
 
export default DesignCard;