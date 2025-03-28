import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const UserDetails = () => {
    const {ID} = useParams()
    const [loading, setLoading] = useState(true)
    const [userDetail, setUserDetail] = useState()


    useEffect(()=>{
        async function fetchAPI(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUserDetail(response.data.find(u=>u.id == ID))
        setLoading(false)
        }
        fetchAPI()
    // console.log(userDetail);

    },[userDetail])

if(loading) return <div class="spinner-grow text-light text-center" role="status"></div>

 return (
    <div>
      {userDetail.name}
    </div>
  )
}

export default UserDetails