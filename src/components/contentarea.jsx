import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from '../components/about';
import Experience from '../components/experience';
import Work from '../components/work';
import Contact from '../components/contact';
class ContentArea extends Component {
    state = {}
    render() {
        return (
            <main className="container">
                <Route path="/about" component={About}></Route>
                <Route path="/experience" component={Experience}></Route>
                <Route path="/work" component={Work}></Route>
                <Route path="/contact" component={Contact}></Route>
            </main>
        );
    }
}

export default ContentArea;