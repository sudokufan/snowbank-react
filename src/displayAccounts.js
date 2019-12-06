import React, {useEffect, useState} from "react";
import useAccounts from './useAccounts'
import './displayAccounts.css'

function DisplayAccounts(){
    const accounts = useAccounts()
    const accountDetails = accounts.map((account) =>
        <div>
        <li>{account.name}</li>
        <li>{account.balance}</li>
    </div>
);
    return (
        <div>
        {accountDetails}
        </div>
    );

}


export default DisplayAccounts