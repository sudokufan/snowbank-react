import React, {useEffect, useState} from "react";
import useAccounts from './useAccounts'
import './displayAccounts.css'

const DisplayAccounts = () => {
    const accounts = useAccounts()
    const accountDetails = accounts.map((account) =>
        <ul className="accountList">
        <li>{account.name}</li>
        <li>{account.balance}</li>
    </ul>
)
    return (
        <div>
        {accountDetails}
        </div>
    )

}


export default DisplayAccounts