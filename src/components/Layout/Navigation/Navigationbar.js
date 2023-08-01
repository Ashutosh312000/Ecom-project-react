
import { Navbar,Nav,Container,Button} from 'react-bootstrap'
import './Navigationbar.module.css';
function Navigationbar() {
  return (
    <>
       <Navbar className='fixed-top bg-light' bg="dark" data-bs-theme="dark" expand="lg">
        <Container className='d-flex justify-content-center '>
          <Nav className="me-auto">
            <Nav.Link className='px-5 navlink' href="#home">Home</Nav.Link>
            <Nav.Link className='px-5 navlink' href="#store">Store</Nav.Link>
            <Nav.Link className='px-5 navlink' href="#about">About</Nav.Link>
          </Nav>
        </Container>
        <Button variant="primary">Cart</Button>
      </Navbar>
      
  </>)
}

export default Navigationbar;
