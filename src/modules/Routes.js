import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../modules/Header';
import Home from '../pages/Home.js';
import Detail from '../pages/Detail.js';

export default function Routes(props) {
    return(
        <div>
            
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/monster/:id" exact component={Detail} />
                    {/* <Route path="/resultado/:searchTerm" exact component={Search} /> */}
                </Switch>
            </Router>
        </div>
        
    )
}