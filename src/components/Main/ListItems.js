import React from "react";
import { Card,Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";


function ListItem(props){

    const cartctx=useContext(CartContext)

    function addToCart(){
        const item={
            id:props.id,
            title:props.title,
            imageUrl:props.imageUrl,
            price:props.price,
            quantity:1,
        }
        cartctx.addItem(item)
    }

return (
    <>
         <Card  className="w-75">
                <Card.Header>{props.title}</Card.Header>
                <Card.Img variant="top" src={props.imageUrl}></Card.Img>
                <Card.Footer className="d-flex justify-content-between">
                    <span>${props.price}</span>
                    <Button onClick={addToCart} className="btn-sm" variant="primary">Add To Cart</Button>
                </Card.Footer>
        </Card>

    </>
)

}

export default ListItem;
