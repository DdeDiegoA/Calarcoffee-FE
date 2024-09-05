import CollapsibleButton from '../all/CollapsibleButton/CollapsibleButton';
import PropTypes from 'prop-types';
import Cart from '../cart/Cart';
import logoCalarCoffee from '../../assets/images/CorazonCalarCoffe1.webp';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Header.css';
import { onLogOut } from '../../stores/actions/userRegisterActions';
import { useEffect, useState } from 'react';

const Header = (props) => {
  const {
    userReducer: { user_data },
    onLogOut,
  } = props;
  const [elementsOptions, setElementsOptions] = useState([
    { name: 'Mi perfil', link: '/MyProfile' },
    { name: 'Cerrar sesion', function: onLogOut },
  ]);
  useEffect(() => {
    if (user_data !== null) {
      if (user_data.Role.id === 2 || user_data.Role.id === 3) {
        setElementsOptions([
          { name: 'Mi perfil', link: '/MyProfile' },
          { name: 'Dashboard', link: '/Dashboard' },
          { name: 'Cerrar sesion', function: onLogOut },
        ]);
      } else
        [
          { name: 'Mi perfil', link: '/MyProfile' },
          { name: 'Cerrar sesion', function: onLogOut },
        ];
    }
  }, [user_data]);

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
          {user_data === null && (
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
          )}
          {user_data !== null && (
            <CollapsibleButton
              idName='user-profile'
              icon={'bi bi-person-fill'}
              options={elementsOptions}
              dropDownClassName={'header_collapsable_button'}
            />
          )}
          <Cart />
        </div>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  userReducer: PropTypes.object,
  onLogOut: PropTypes.func,
};
const mapStateToProps = ({ userReducer }) => {
  return {
    userReducer,
  };
};

const mapDispatchToProps = {
  onLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
