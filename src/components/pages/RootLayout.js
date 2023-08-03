import { Outlet } from "react-router-dom";
import Navigationbar from '../Layout/Navigation/Navigationbar'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import Cart from '../Cart/Carts'
import { useState } from 'react'
import CartProvider from '../../store/CartProvider'

function RootLayout(){

    const [showCart,setShowCart]=useState(false);

    const cartHandler=function(){
      setShowCart(prevState=>{
        return prevState?false:true;
      });
    }

    return(
        
         <CartProvider>
       { showCart && <Cart  cartHandler={cartHandler} ></Cart>}
      <Navigationbar cartHandler={cartHandler}></Navigationbar>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
      </CartProvider>
        
    )
}

export default RootLayout;