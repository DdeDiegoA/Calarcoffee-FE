import { formatPriceCop } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import './ProductCard.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import { useState } from 'react';

const ProductCard = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(product);
  return (
    <>
      <article className='cardProduct_container'>
        <div onClick={handleShow}>
          <figure>
            <img className='cardProduct_image' src={product.imagen}></img>
          </figure>
          <div className='cardProduct_detail'>
            <div className='cardProduct_detail_data'>
              <h3 className='cardProduct_detail_name'>{product.nombre}</h3>
              <div>
                <span className='cardProduct_detail_price'>
                  {formatPriceCop(product.precio)}
                </span>
              </div>
              {/* <span className='cardProduct_detail_stock'>Unidades:10</span> */}
            </div>
          </div>
        </div>
        <button
          className='cardProduct_detail_button'
          onClick={() => console.log('boton')}
        >
          Añadir al carrito
        </button>
      </article>
      <ProductDetail handleClose={handleClose} show={show} product={product} />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
