
import { Container} from 'react-bootstrap'
import './Header.module.css';
function Header() {
  return (
    <>
        <Container fluid className="d-flex  flex-column">
            <div className='row d-flex justify-content-center bg-secondary py-5'>
              <h1 className='text-light display-2 font-weight-bold'>The Generics</h1>
              </div>
        </Container>
  </>)
}

export default Header;
