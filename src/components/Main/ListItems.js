import React from "react";
import { Container,Row,Col, Card,Button } from "react-bootstrap";
function ListItem(props){

return (
    <>
        {  <Card  style={{ width: "15rem"}}>
                <Card.Header>{props.title}</Card.Header>
                <Card.Img variant="top" src={props.imageUrl}></Card.Img>
                <Card.Footer className="d-flex justify-content-between">
                    <span>${props.price}</span>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Footer>
        </Card>
}
    </>
)

}

export default ListItem;
