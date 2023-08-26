import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Cart.css';
import CartCardProduct from '../all/CartCardProduct/CartCardProduct';
import { formatPriceCop } from '../../utils/formatPrice';

function Cart() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const floatingButtonStyle = isMobile
    ? {
        position: 'fixed',
        bottom: '40px',
        right: '20px',
        zIndex: '999',
      }
    : {};

  return (
    <>
      <div
        className='cart_button'
        style={floatingButtonStyle}
        onClick={handleShow}
      >
        <i className='bi bi-cart3'></i>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={'end'}
        className={'cart_slider'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Mi Carrito <i className='bi bi-cart-fill' />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div className='cart_content_container'>
          <div className='cart_content_products'>
            <CartCardProduct />
            <CartCardProduct />
            <CartCardProduct />
            <CartCardProduct />
            <CartCardProduct />
            <CartCardProduct />
            <CartCardProduct />
            <CartCardProduct />
          </div>
        </div>
        <div className='cart_footer_content'>
          <div>
            <div className='cart_resume-total-row'>
              <div className='cart_resume-total-title'>Subtotal:</div>
              <div className='cart_resume-total-price'>
                {formatPriceCop(300000)}
              </div>
            </div>
            <div className='cart_resume-total-row'>
              <div className='cart_resume-total-title'>IVA:</div>
              <div className='cart_resume-total-price'>
                {formatPriceCop(300000)}
              </div>
            </div>
            <div className='cart_resume-total-row cart_resume-total'>
              <div className='cart_resume-total-title'>TOTAL:</div>
              <div className='cart_resume-total-price'>
                {formatPriceCop(300000)}
              </div>
            </div>
            <p>
              El costo del envio puede variar dependiendo de la ciudad a enviar
            </p>
            <button className='cart_resume-pay'>PAGAR</button>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}

export default Cart;
