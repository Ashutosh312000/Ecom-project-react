import React from "react";
import { Container,Row,Col, Card,Button } from "react-bootstrap";
function ListItem(props){

return (
    <>
         <Card  className="w-75">
                <Card.Header>{props.title}</Card.Header>
                <Card.Img variant="top" src={props.imageUrl}></Card.Img>
                <Card.Footer className="d-flex justify-content-between">
                    <span>${props.price}</span>
                    <Button className="btn-sm" variant="primary">Add To Cart</Button>
                </Card.Footer>
        </Card>


        {/* <Container>
            <Row className="row-cols-2">
                <Col>hi</Col>
                <Col>hi</Col>
                <Col>hi</Col>
                <Col>hi</Col>
                <Col>hi</Col>
            </Row>
        </Container> */}


    </>
)

}

export default ListItem;
