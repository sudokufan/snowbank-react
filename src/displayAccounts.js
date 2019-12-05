import React from "react";


useAccounts = () => {
    const [accounts, setAccounts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/accounts')
            .then((data)=>{return data.json()})
            .then((data)=>{

                setAccounts()
            })
    })


}


export default displayAccounts