import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
 
const UserList = () => {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function fetchAPI(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
        setLoading(false)
        }
        fetchAPI()
    },[])
if(loading) return <div class="spinner-grow text-light text-center" role="status">
<span class="visually-hidden">Loading...</span>
</div>
  return (
    <div>
      <ul>
        {users.map((u,index)=>(
            <li key={index}><Link to={`/user/${u.id}`}>{u.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}
export default UserList
