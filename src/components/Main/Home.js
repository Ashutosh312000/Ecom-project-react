import { Container,Button,Row,Col } from "react-bootstrap";

const tourdata = [
    { date: 'JUL 16', city: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
    { date: 'JUL 19', city: 'TORONTO,ON', venue: 'BUDWEISER STAGE' },
    { date: 'JUL 22', city: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
    { date: 'JUL 29', city: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
    { date: 'AUG 2', city: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
    { date: 'AUG 7', city: 'CONCORD, CA', venue: 'CONCORD PAVILION' }
]

function Home() {
    return (
        <>
            
            <Container className="text-center my-5">
            <h3 className="my-4">TOURS</h3>
                {tourdata.map((ele) => {
                    return (
                        <Row className="my-3  border-bottom ">
                            <Col>{ele.date}</Col>
                            <Col>{ele.city}</Col>
                            <Col>{ele.venue}</Col>
                            <Col><Button className="mb-2" varient="primary">Buy Tickets</Button></Col>
                        </Row>
                    )
                })}
            </Container>
        </>
    )
}

export default Home;