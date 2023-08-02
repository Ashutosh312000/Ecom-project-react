import React, { useContext } from "react";
import { Row,Col,Image,Form,Button } from "react-bootstrap";
import classes from './Carts.module.css'
import CartContext from "../../store/Cart-context";



function Product(props) {
    const cartctx=useContext(CartContext)
    function removeFromCart(){
        cartctx.removeItem(props.ele.id);
    }

    return (
        <Row >
                    <Col>
                    <Image src={props.ele.imageUrl} className="w-50 mt-2"></Image>
                    <h6 className={classes.title}>{props.ele.title}</h6>
                    </Col>
                    <Col className={`${classes.price} mt-4`} >$ {props.ele.price}</Col>
                    <Col >
                    <Row className="row-cols-2">
                        <Col>
                            <Form className="mt-4">
                                <Form.Group>
                                <Form.Control min="0" max="15" type="number" ></Form.Control>
                                </Form.Group>
                                <Form.Group>        
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                        <Button onClick={removeFromCart} size="sm" className="mt-4" variant="danger">Remove</Button>
                        </Col>
                    
                    </Row>
                    </Col>
                </Row>
    )

}

export default Product;
