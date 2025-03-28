import React, { useEffect, useState } from 'react'
import CardBootstrap from './CardBootstrap';


const CardList = ({data}) => {
    console.log("In cardList component",data);

    const [cards, setCards] = useState([])

    useEffect(()=>{
        setCards(data);
    })

  return (
    <div className='container bg-white'>
        <div className="row">
      {cards.map((elmt, index)=>(
        <>
            <div key={index} className='col mb-3 hoverEffect'>
                <CardBootstrap city={elmt}/>
            </div>
        </>
      ))}
      </div>
    </div>
  )
}

export default CardList
