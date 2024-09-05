import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Cart.css';
import CartCardProduct from '../all/CartCardProduct/CartCardProduct';
import { formatPriceCop } from '../../utils/formatPrice';
import ShoppingCart from '../../utils/cartManager';
import { cartEventEmitter } from '../../utils/cartManager';

function Cart() {
  const [cartElements, setCartElements] = useState([]);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCartChange = () => {
    // Actualizar el carrito cuando cambie
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartElements(cart);
  };

  useEffect(() => {
    handleCartChange();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Registrar el componente para escuchar cambios en el carrito
    cartEventEmitter.on('cartChanged', handleCartChange);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      // Desregistrar el componente cuando se desmonte
      cartEventEmitter.removeListener('cartChanged', handleCartChange);
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
        {cartElements.length >= 1 && (
          <span className='amount-elements'>{cartElements.length}</span>
        )}
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
            {cartElements.length > 0 &&
              cartElements.map((element, index) => (
                <CartCardProduct element={element} key={index} />
              ))}
          </div>
        </div>
        <div className='cart_footer_content'>
          <div>
            <div className='cart_resume-total-row'>
              <div className='cart_resume-total-title'>Subtotal:</div>
              <div className='cart_resume-total-price'>
                {formatPriceCop(ShoppingCart.getSubTotal())}
              </div>
            </div>
            <div className='cart_resume-total-row'>
              <div className='cart_resume-total-title'>IVA:</div>
              <div className='cart_resume-total-price'>
                {formatPriceCop(ShoppingCart.getIva())}
              </div>
            </div>
            <div className='cart_resume-total-row cart_resume-total'>
              <div className='cart_resume-total-title'>TOTAL:</div>
              <div className='cart_resume-total-price'>
                {formatPriceCop(ShoppingCart.getTotalPrice())}
              </div>
            </div>
            <p>
              El costo del envio puede variar dependiendo de la ciudad a enviar
            </p>
            <button className='cart_resume-pay' disabled={!cartElements.length}>
              PAGAR
            </button>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}

export default Cart;
