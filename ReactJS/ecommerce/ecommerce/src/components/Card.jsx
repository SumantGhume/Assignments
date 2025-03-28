import React from 'react'

const Card = ({ele}) => {
    console.log(ele.image)
  return (
    <>
    <div className="card" style={{ width: "18rem" }} >
        <img src={ele.image} className="card-img-top" alt="..." style={{ width: "auto",height:"18rem" }}/>
        <div className="card-body" >
          <h5 className="card-title" >{ele.name}</h5>
          <p className="card-text">
            {ele.info}
          </p>
          <p className="card-text">Price: {ele.price} ₹
          </p>
          <a href="#" className="btn btn-primary">
            Let's Go...
          </a>
        </div>
      </div>
    </>
  )
}

export default Card