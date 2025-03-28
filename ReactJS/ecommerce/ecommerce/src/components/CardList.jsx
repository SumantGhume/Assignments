import React, { useEffect, useState } from "react";

import Card from "./Card";


const Card_List = ({data}) => {
    console.log("Card List data:",data)
    const [card,setCards] = useState([]);

    useEffect(()=>{
        setCards(data)
    })
    return (
        <div className="container">
            <div className="row">
          {card.length > 0 ?(
            <>
            {card.map((ele,index) => (
                <div className='col mb-3 hoverEffect' key={index}>
                    <Card key={ele.id} ele={ele} />
                </div>
                 
              ))}
            
            </>
          ):(<><p>No Data</p></>)}
          </div>
        </div>
      );

  
};

export default Card_List;
