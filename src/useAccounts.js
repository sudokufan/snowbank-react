import React, {useEffect, useState} from "react";


const useAccounts = () => {
    const [accounts, setAccounts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/accounts')
            .then((data)=>{return data.json()})
            .then((data)=>{

                setAccounts(data)
            })
    })
return accounts

}


export default useAccounts