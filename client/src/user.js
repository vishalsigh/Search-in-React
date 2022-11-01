import React, { useEffect, useState } from 'react'

function User() {
    
    const [record, setRecord] = useState([])
    const [query, setQuery] = useState("")
    

    useEffect(()=> {
        async function getRecords() {
            const response = await fetch('https://reqres.in/api/users/')
            const value = await response.json()
            const record = value.data
            setRecord(record)

            console.log(record)
        }
        getRecords()
        return;

    },[record.lenght])
    
  return (
    <div>
        <input placeholder="Enter User Id" 
        onChange={event => setQuery(event.target.value)} />
        
        {
        record.filter((user) => {
            if (query === '') {
            return user;
        } 
        else if (user.id.toString().includes(query.toString())) {
            return user;
        }
        })
        .map((user) => (
            <div key={user.id}>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
                <img src={user.avatar} alt = 'profile' />
        </div>
  ))
}
    </div>
  )
}

export default User