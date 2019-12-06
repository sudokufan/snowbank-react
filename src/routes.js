import React from 'react';
import './index.css';
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
            <li>
            <Link to="/users">Users</Link>
            </li>
            </ul>
            <Switch>
            <Route exact path="/" component={App}/>
        <Route path="/accounts" component={DisplayAccounts}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound}/>
        </Switch>
        </div>
        </Router>
    )
    }
}

export default Routes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA