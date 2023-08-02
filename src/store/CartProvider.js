import {  useState } from 'react';

import CartContext from './Cart-context';




const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalamount, updateTotalAmount] = useState(0);
  
  const addItemToCartHandler = (item) => {
    let newadd=true;
    console.log(item.id)
    items.forEach(ele => {
      if(ele.id===item.id){
        newadd=false;
        alert('This Product Is already In The Cart')
       }
    });
   
    if(newadd===true){
      setItems([...items,item])
      updateTotalAmount((+totalamount+(+item.price)).toFixed(2));
    }
   
  };

  const removeItemFromCartHandler = (id) => {
    let price=0;
    const updateitems=items.map((ele)=>{
      if(ele.id===id){
          price=ele.price
          return null;   
        }
      return ele;
    })
    
    const finalupdateitems=updateitems.filter((ele)=>{
      return ele!=null;
    })

    setItems(finalupdateitems);
    updateTotalAmount((+totalamount-price).toFixed(2))

  };

  const cartContext = {
    items:items,
    totalamount:totalamount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
