import LogoCalarCoffee from '../../../assets/images/CorazonCalarCoffe1.webp';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSidebarOpen } from '../../../stores/actions/globalActions';
import './SideBarMenu.css';

const SideBarMenu = (props) => {
  const {
    setSidebarOpen,
    globalReducer: { global_dashboard_sidebar_open },
  } = props;
  const [path, setPath] = useState('');
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div
      className={`sideBarMenu ${
        global_dashboard_sidebar_open ? '' : 'sideClose'
      }`}
    >
      <div>
        <header
          className='sideBarMenu_header'
          onClick={() => setSidebarOpen(!global_dashboard_sidebar_open)}
        >
          <img src={LogoCalarCoffee} alt={'calarCoffee-logo'} />
          <h3 className='h3'>CALARCOFFEE</h3>
        </header>
        <nav>
          <Link
            className={path === '/Dashboard' ? 'active' : ''}
            to={'/Dashboard'}
          >
            <i className='bi bi-house-fill' />
            <span className='navBar_link_name '>Home</span>
          </Link>
          <Link
            className={path === '/Dashboard/products' ? 'active' : ''}
            to={'/Dashboard/products'}
          >
            <i className='bi bi-basket-fill' />
            <span className='navBar_link_name'>Productos</span>
          </Link>
          <Link
            className={path === '/Dashboard/categories' ? 'active' : ''}
            to={'/Dashboard/categories'}
          >
            <i className='bi bi-tags-fill' />
            <span className='navBar_link_name'>Categorias</span>
          </Link>
          <Link
            className={path === '/Dashboard/sales' ? 'active' : ''}
            to={'/Dashboard/sales'}
          >
            <i className='bi bi-receipt' />
            <span className='navBar_link_name'>Ventas</span>
          </Link>
        </nav>
      </div>
      <footer>
        <Link className='navBar_marketplace-btn' to={'/'}>
          <i className='bi bi-shop' />
          <span className='navBar_link_name '>MarketPlace</span>
        </Link>
        <Link className='navBar_logout-btn'>
          <i className='bi bi-box-arrow-left' />
          <span className='navBar_link_name '>Cerrar sesion</span>
        </Link>
      </footer>
    </div>
  );
};
SideBarMenu.propTypes = {
  setSidebarOpen: PropTypes.func,
  globalReducer: PropTypes.object,
};
function mapStateToProps({ globalReducer }) {
  return {
    globalReducer,
  };
}
const mapDispatchToProps = {
  setSidebarOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
