import { useState,useEffect } from "react"
import { getAllProduct } from "../API/api"

const ProductsDashboard = () => {
    const[AllProduct,setAllProduct] = useState([]);
    // const [PName,setPNmae] = useState(AllProduct[0].name);

    const fetchAPI = async()=>{
        const displayAllProduct = await getAllProduct();
        console.log("Diasplay Product at Fetch API: ",displayAllProduct)
        setAllProduct(displayAllProduct);
        
        displayProduct()
        
    }
    const displayProduct=()=>{
        
    }
    useEffect(() => {
        fetchAPI();
        
        
    }, [])
    // console.log("Diasplay Product at UseEffect API: ",PName)


  return (
    <div>
        
            <h1>List of Product: </h1>
            <ul>
      {AllProduct && AllProduct.length > 0 && 
        AllProduct.map((p, i) =>
        
        <li key={i}>{p.name}</li>)}
        {/* {displayProduct()} */}
    </ul>
            

        
      
    </div>
  )
}

export default ProductsDashboard
