import React from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import classes from "./Footer.module.css"

function Footer() {

    return (
        <>
            <Container fluid style={{ backgroundColor: "#56CCF2" }}>
                <Row>
                    <Col className="pl-5 text-light ml-5" ><h1>The Generics</h1></Col>
                    <Col>
                        <ListGroup horizontal className="mt-1 ml-5">
                            <ListGroup.Item variant="primary"><a target="_blank" href="https://www.youtube.com"><img className={classes.listgroup} src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="Youtube Icon" /> </a>
                            </ListGroup.Item>
                            <ListGroup.Item variant="primary"><a target="_blank" href="https://www.spotify.com"><img className={classes.listgroup} src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="Spotify Icon" /></a>
                            </ListGroup.Item>
                            <ListGroup.Item variant="primary"><a target="_blank" href="https://www.facebook.com"><img className={classes.listgroup} src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="Facebook Icon" /></a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default Footer;
