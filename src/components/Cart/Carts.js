import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Container,Row,Col,Button } from "react-bootstrap";
import classes from './Carts.module.css'
import Product from "./Product";
import CartContext from "../../store/Cart-context";
import { useContext } from "react";



function Cart(props) {
    const cartctx=useContext(CartContext)
    return (
        <>
         <div className={`${classes.position} bg-light border border-primary `} >
            <h2>CART</h2>
            <CloseButton onClick={props.cartHandler}  className={`${classes.closebtn}`}>X</CloseButton>
            <Container fluid>
            <Row >
                <Col className={classes.text}>Item</Col>
                <Col className={classes.text}>Price</Col>
                <Col className={classes.text}>Quantity</Col>
            </Row>
            {cartctx.items.map((ele)=>{
                return(
                    <Product key={ele.id} ele={ele}></Product>
                )
            })}
            <div className={classes.total}>Total: $ {cartctx.totalamount}</div>
            <div>
                <Button varient="primary" size="lg">Purchase</Button>
            </div>
         </Container>
         </div>
        
        </>
    )

}

export default Cart;
