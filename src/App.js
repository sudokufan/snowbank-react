import React from 'react';
import './App.css'
import Header from './Header'
import DisplayAccounts from './displayAccounts'
import DisplayAccountsAbove from './displayAccountsAbove'

function App() {
  return (
    <div>
      <Header />
      <DisplayAccounts />
      <DisplayAccountsAbove />
    </div>
  )
}

export default App;
