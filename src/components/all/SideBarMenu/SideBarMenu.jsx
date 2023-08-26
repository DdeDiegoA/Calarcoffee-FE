import { useState } from 'react';
import LogoCalarCoffee from '../../../assets/images/CorazonCalarCoffe1.webp';
import './SideBarMenu.css';
import { Link } from 'react-router-dom';

const SideBarMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`sideBarMenu ${open ? '' : 'sideClose'}`}>
      <div>
        <header className='sideBarMenu_header' onClick={() => setOpen(!open)}>
          <img src={LogoCalarCoffee} alt={'calarCoffee-logo'} />
          <h3 className='h3'>CALARCOFFEE</h3>
        </header>
        <nav>
          <Link className='active'>
            <i className='bi bi-house-fill' />
            <span className='navBar_link_name '>Home</span>
          </Link>
          <Link>
            <i className='bi bi-basket-fill' />
            <span className='navBar_link_name'>Productos</span>
          </Link>
          <Link>
            <i className='bi bi-tags-fill' />
            <span className='navBar_link_name'>Categorias</span>
          </Link>
          <Link>
            <i className='bi bi-receipt' />
            <span className='navBar_link_name'>Ventas</span>
          </Link>
        </nav>
      </div>
      <footer>
        <Link className='navBar_marketplace-btn'>
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

export default SideBarMenu;
