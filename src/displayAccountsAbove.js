import React, {useEffect, useState} from "react";
import useAccountsAbove from './useAccountsAbove'
import './displayAccounts.css'

const DisplayAccountsAbove = () => {
    const accounts = useAccountsAbove()
    const accountDetails = accounts.map((account) =>
        <ul className="accountList">
        <li>{account.name}</li>
        <li>£{account.balance}</li>
    </ul>
)
    return (
        <div className="accountContainer">
        {accountDetails}
        </div>
    )

}


export default DisplayAccountsAbove