import React from "react";
import "./Products.css"
import { useContext } from "react";
import { cartContext } from "../App";

export const Products = ({ product }) => {
  const {cart, setCart} = useContext(cartContext)

  const addCart = () =>{
    setCart([...cart, product]);
  }
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id))
  }

  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt="" />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>Prize Rs:{product.amt}</p>
        {cart.includes(product) ? (
          <button className="btnRemove" onClick={removeCart}> Remove from cart</button>
        ):(<button onClick={addCart}> Add to cart </button>)}
      </div>
    </div>
  );
};
