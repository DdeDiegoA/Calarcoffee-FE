import PropTypes from 'prop-types';
import { Offcanvas } from 'react-bootstrap';
import { formatPriceCop } from '../../../utils/formatPrice';
import { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = (props) => {
  const { show, handleClose, product } = props;
  const [amount, setAmount] = useState(1);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={'end'}
      className={'cart_slider'}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{product.nombre}</Offcanvas.Title>
      </Offcanvas.Header>
      <div className='Product_detail_container'>
        <img src={product.imagen} alt={product.nombre.trim()} />
        <div className='product_details_price'>
          {formatPriceCop(product.precio)} <span>COP</span>
        </div>
        <div className='product_details'>
          <span>
            {product.categoria}: {product.tipo}
          </span>
          <span>{product.descripcion}</span>
        </div>
      </div>
      <div className='Product_detail_footer'>
        <div className='CartCardProduct_content_addRemoveProduct'>
          <button onClick={() => setAmount(amount - 1)}>
            <i className='bi bi-dash' />
          </button>
          <div>
            <span>{amount}</span>
          </div>
          <button onClick={() => setAmount(amount + 1)}>
            <i className='bi bi-plus' />
          </button>
        </div>
        <button>Agregar al carrito</button>
      </div>
    </Offcanvas>
  );
};
ProductDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
export default ProductDetail;
