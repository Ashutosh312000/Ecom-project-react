import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import ListItem from "./ListItems";

const productsArr = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

]



function Store() {

    return (
        <>
        <div style={{textAlign:"center"}}>
            <h2>Music</h2>
            <Container>
                <Row >
                    {productsArr.map((prd)=>{
                        return(
                        <Col className=" col-4 offset-2 mt-4" >
                            <ListItem
                        title={prd.title}
                        price={prd.price}
                        imageUrl={prd.imageUrl}
                        ></ListItem>
                        </Col>
                        )
                    })}
             </Row>
            </Container>          
            <Button variant="secondary" className="m-4">See The Cart</Button>
            </div>
        </>
    )

}

export default Store;
