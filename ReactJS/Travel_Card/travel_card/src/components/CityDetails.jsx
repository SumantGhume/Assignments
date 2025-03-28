import React, { useState,useEffect } from 'react'
import { Link, Route, Routes, useParams,  } from 'react-router-dom';
import data from '../data'

const CityDetails = () => {
    const [city, setCity] = useState({})
    const {ID} = useParams()
    console.log(data);
    
    useEffect(()=>{
       const cityArray = data.filter((f)=>f.id == ID)
    setCity(cityArray[0])    
    },[])
console.log(city)
  return (
    <>
      Details 
      <h1>{city.name}</h1>
      <p>{city.info}</p>
<Link to='review' >Review</Link>


<Routes>
    <Route path='review' element={<Review r={city.reviews} />}></Route>
</Routes>

    </>
  )
function Review({r}){
    console.log(r);
    return(
        <>
        <div style={{backgroundColor:"red"}}>

        </div>
        </>
    )
}

}

export default CityDetails
