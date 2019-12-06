import React, {useEffect, useState} from "react";


function useAccountsAbove() {
    const [accounts, setAccounts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/accounts/:balance/morethan')
            .then((data)=>data.json())
            .then((data)=>{
                setAccounts(data)
            })
    }, [])
    return accounts

}


export default useAccountsAbove