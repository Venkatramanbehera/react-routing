import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const Users = (props) => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <ol>
                {
                   users && users.map((user) => {
                        return <li key={user.id}> <Link to={`users/${ user.id }`}>{ user.username }</Link></li>
                    })
                }
            </ol>
        </div>
    )
}

export default Users
