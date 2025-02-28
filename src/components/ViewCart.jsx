import "./ViewCart.css";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../App";

export const ViewCart = () => {
  const {cart, setCart} = useContext(cartContext)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=>acc + parseInt(curr.amt),0))
  }, [cart])
  return (
    <>
      <h1 className="cart-heading">Cart Product</h1>
      <div className="cart-container">
        {cart.map((product)=>(
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="image" /> 
              </div>
              <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
              </div>
            </div>
        ))}          
       </div>
      <h2 className="cart-amt">Total Amount: {total} </h2>
    </>
  );
};
