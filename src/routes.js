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
            <Link to="/accounts">All accounts</Link>
            </li>
            <li>
            <Link to="/accounts">Accounts over £500</Link>
            </li>
            <li>
            <Link to="/accounts">Accounts over £1,000</Link>
            </li>
            <li>
            <Link to="/accounts">Accounts over £10,000</Link>
            </li>
            </ul>
            <Switch>
            <Route exact path="/" component={App}/>
        <Route path="/accounts" component={DisplayAccounts}/>
        <Route path="/accounts/500/morethan" component={DisplayAccountsAbove}/>
        <Route path="/accounts/1000/morethan" component={DisplayAccountsAbove}/>
        <Route path="/accounts/10000/morethan" component={DisplayAccountsAbove}/>
        <Route component={NotFound}/>
        </Switch>
        </div>
        </Router>
    )
    }
}

export default Routes