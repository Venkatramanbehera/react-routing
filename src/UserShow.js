import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const UserShow = (props) => {
    const { id } = props.match.params 

    const [ user, setUser ] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((Response) => {
                const result = Response.data
                setUser(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    return (
        <div>
            { user && <h2>{ user.name } - { user.email } - { user.address && user.address.city }</h2> }
            <Link to="/users"> Back </Link>
        </div>
    )
}

export default UserShow
