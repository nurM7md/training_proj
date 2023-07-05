import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import logo from './../../assets/images/Vector.png';
import './../shared/navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">

          <div className="icons">
            <div id='i1'>
            <FiShoppingCart />
          </div>
          <div id='i2'>
            <AiOutlineHeart />
            </div>
            <div id='i3'>
            <BsPerson />
            </div>
            <div id='i4'>
            <BsSearch />
          </div>
          </div>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="ml-auto" id='menu'>
            <Nav.Link href="#" className='links'>اتصل بنا</Nav.Link>
            <Nav.Link href="#" className='links'>المدونة</Nav.Link>
            <Nav.Link href="#" className='links'>الشروط و الاحكام</Nav.Link>
            <Nav.Link href="#" className='links'>نبذة عنا</Nav.Link>
            <Nav.Link href="#" className='links'>الخدمات</Nav.Link>
            <Nav.Link href="#" className='links'>المنتجات</Nav.Link>
            <Nav.Link href="#" className='links'>الرئيسية</Nav.Link>
      
            <img src={logo} title="logo" />

          </Nav>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;