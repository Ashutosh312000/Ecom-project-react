import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Container,Row,Col,Image,Form,Button } from "react-bootstrap";
import classes from './Carts.module.css'
import Product from "./Product";

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

function Cart(props) {

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
            {cartElements.map((ele)=>{
                return(
                    <Product ele={ele}></Product>
                )
            })}
            <div className={classes.total}>Total: $ 12.99</div>
            <div>
                <Button varient="primary" size="lg">Purchase</Button>
            </div>
         </Container>
         </div>
        
        </>
    )

}

export default Cart;
