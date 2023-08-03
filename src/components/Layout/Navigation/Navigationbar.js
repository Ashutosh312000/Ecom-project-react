
import { Navbar,Nav,Container,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Navigationbar.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/Cart-context';
import classes from './Navigationbar.module.css'
function Navigationbar(props) {

  const cartctx=useContext(CartContext);

  return (
    <>
       <Navbar className='fixed-top bg-light' bg="dark" data-bs-theme="dark" expand="lg">
        <Container className='d-flex justify-content-center '>
          <Nav className="me-auto">
            <NavLink exact to="/" className="px-5 navlink" activeClassName={`${classes.active} px-5 navlink`}>Home</NavLink>
            <NavLink exact to="/Store" className="px-5 navlink" activeClassName={`${classes.active} px-5 navlink`} >Store</NavLink>
            <NavLink exact to="/About" className="px-5 navlink" activeClassName={`${classes.active} px-5 navlink`}>About</NavLink>
            <NavLink exact to="/ContactUs" className="px-5 navlink" activeClassName={`${classes.active} px-5 navlink`}>Contact Us</NavLink>
          </Nav>
        </Container>
        <Button onClick={props.cartHandler} variant="primary">Cart</Button>  <span className='pl-2' style={{color:'white'}}> {cartctx.items.length}</span>

      </Navbar>
      
  </>)
}

export default Navigationbar;
