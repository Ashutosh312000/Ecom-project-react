
import { Container, Row, Col,Button } from "react-bootstrap";
import ListItem from "./ListItems";



const productsArr = [

    {
        id:1,
        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
        id:2,
        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
        id:3,
        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
        id:4,
        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

]



function Store(props) {


    return (
        <>
        <div style={{textAlign:"center"}}>
            <h2>Music</h2>
            <Container>
                <Row >
                    {productsArr.map((prd)=>{
                        return(
                        <Col key={prd.id} className=" col-4 offset-2 mt-4" >
                            <ListItem
                            id={prd.id}
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
