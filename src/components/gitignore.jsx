import React, { Component } from 'react';
import '../styles/gitignore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import git from '../images/gitignore.png'
class Gitignore extends Component {

    render() {
        return (
            <div className="gitignore-menu-container">
                <img src={git} alt=" " className="git-logo" />
                <span className="gitignore-text">{this.props.title}</span>
            </div>
        );
    }
}

export default Gitignore;