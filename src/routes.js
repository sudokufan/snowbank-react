import React from 'react';
import './index.css';
import NotFound from "./NotFound";
import App from './App';
import DisplayAccounts from "./displayAccounts";
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

class Routes extends React.Component {
    render() {
        return (
            <Router>
            <div>
            <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/accounts">DisplayAccounts</Link>
            </li>
            </ul>
            <Switch>
            <Route exact path="/" component={App}/>
        <Route path="/accounts" component={DisplayAccounts}/>
        <Route component={NotFound}/>
        </Switch>
        </div>
        </Router>
    )
    }
}

export default Routes