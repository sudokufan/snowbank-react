import React, {useEffect, useState} from "react";
import useAccounts from './useAccounts'
import './displayAccounts.css'

const DisplayAccounts = () => {
    const accounts = useAccounts()
    const accountDetails = accounts.map((account) =>
        <div className="accountContainer">
        <ul className="accountList">
        <li>{account.name}</li>
        <li>{account.balance}</li>
    </ul>
    </div>
)
    return (
        <div>
        {accountDetails}
        </div>
    )

}


export default DisplayAccounts