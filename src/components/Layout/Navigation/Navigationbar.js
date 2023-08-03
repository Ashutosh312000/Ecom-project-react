
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
            <NavLink to="/" className={ ({isActive})=>{
              return isActive?`${classes.active} px-5 navlink`: 'px-5 navlink'
            }}>Home</NavLink>
            <NavLink to="/Store" className={({isActive})=>{
              return isActive?`${classes.active} px-5 navlink`: 'px-5 navlink'
            }} >Store</NavLink>
            <NavLink to="/About" className={({isActive})=>{
              return isActive?`${classes.active} px-5 navlink `: 'px-5 navlink'
            }} >About</NavLink>
          </Nav>
        </Container>
        <Button onClick={props.cartHandler} variant="primary">Cart</Button>  <span className='pl-2' style={{color:'white'}}> {cartctx.items.length}</span>

      </Navbar>
      
  </>)
}

export default Navigationbar;
