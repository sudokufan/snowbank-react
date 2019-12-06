import React from 'react';
import './App.css'
import Header from './Header'
import DisplayAccounts from './displayAccounts'
import DisplayAccountsAbove from './displayAccountsAbove'
import Routes from "./routes";

function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  )
}

export default App;
