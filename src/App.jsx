import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from './components/Header'
import { Home } from "./components/Home"
import { ViewCart } from "./components/ViewCart"
import "./App.css"
import { useState, createContext } from "react"

export const cartContext = createContext()

function App() {
  const[cart, setCart]= useState([])
  return (
    <cartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
           <Header cart={cart}/>
           <div className="container">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cart" element={<ViewCart/>}/> 
              </Routes>
           </div>
       </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App

