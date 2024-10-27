import data from "../Product"
import { useState } from "react"
import { Products } from "./Products"
import "./Home.css"

export const Home = () => {
  const [products] =useState(data)
  return (
    <div className="product-container">
      {products.map((product)=>(
        <Products key={product.id} product={product}/>
      ))}
    </div>
    
  )
}
