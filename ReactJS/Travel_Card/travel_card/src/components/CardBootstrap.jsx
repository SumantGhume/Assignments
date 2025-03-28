import React from 'react'
import {Link} from 'react-router-dom';

const CardBootstrap = ({city}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={city.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{city.name}</h5>
      <p className="card-text">{city.info}</p>
      <p className="card-text text-primary">Price : {city.price}</p>

      <Link to={`/city-details/${city.id}`} className="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
  )
}

export default CardBootstrap
