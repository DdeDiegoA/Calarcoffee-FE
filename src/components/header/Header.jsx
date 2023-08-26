import CollapsibleButton from '../all/CollapsibleButton/CollapsibleButton';
import { Link } from 'react-router-dom';
import logoCalarCoffee from '../../assets/images/CorazonCalarCoffe1.webp';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Cart from '../cart/Cart';
import './Header.css';

const Header = () => {
  function logOut() {
    console.log('se cerro sesion');
  }

  const elementsOptions = [
    { name: 'Mi perfil', link: '/MyProfile' },
    { name: 'Dashboard', link: '/Dashboard' },
    { name: 'Cerrar sesion', function: logOut },
  ];

  return (
    <Navbar expand='lg' className='header_container'>
      <Container fluid className='header_container_content'>
        <Link to={'/'} className='header_center_content'>
          <div className='header_center_image'>
            <img src={logoCalarCoffee} />
          </div>
          <h1>CALARCOFFEE</h1>
        </Link>
        <div className='navBar_content'>
          <Nav
            className='me-auto my-2 my-lg-0 navBar_links'
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
            <Link className='header_option_redirect' to={'/login'}>
              Iniciar sesion
            </Link>
            <Link className='header_option_redirect' to={'/signUp'}>
              Registrarse
            </Link>
          </Nav>
          <CollapsibleButton
            idName='user-profile'
            icon={'bi bi-person-fill'}
            options={elementsOptions}
            dropDownClassName={'header_collapsable_button'}
          />
          <Cart />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
