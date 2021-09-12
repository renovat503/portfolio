import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/about';
import Work from '../components/work';
class ContentArea extends Component {
    state = {}
    render() {
        return (
            <main className="container">
                <Switch>
                <Route path="/" exact component={About}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/work" component={Work}></Route>
                </Switch>
            </main>
        );
    }
}

export default ContentArea;