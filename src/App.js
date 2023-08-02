
import Navigationbar from './components/Layout/Navigation/Navigationbar'
import Header from './components/Layout/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Layout/Footer/Footer'
import Cart from './components/Cart/Carts'
import './App.css';
import { useState } from 'react'
import CartProvider from './store/CartProvider'
function App() {

  const [showCart,setShowCart]=useState(false);

  const cartHandler=function(){
    setShowCart(prevState=>{
      return prevState?false:true;
    });
  }

  return (
    <CartProvider>
       { showCart && <Cart  cartHandler={cartHandler} ></Cart>}
      <Navigationbar cartHandler={cartHandler}></Navigationbar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </CartProvider>
  )
}

export default App;
