import { formatPriceCop } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import './ProductCard.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import { useState } from 'react';
import ShoppingCart from '../../../utils/cartManager';

const ProductCard = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <article className='cardProduct_container'>
        <div onClick={handleShow}>
          <figure>
            <img
              className='cardProduct_image'
              src={product.ProductImages[0].src}
            ></img>
          </figure>
          <div className='cardProduct_detail'>
            <div className='cardProduct_detail_data'>
              <h3 className='cardProduct_detail_name'>{product.name}</h3>
              <div>
                <span className='cardProduct_detail_price'>
                  {formatPriceCop(product.price)}
                </span>
              </div>
              {/* <span className='cardProduct_detail_stock'>Unidades:10</span> */}
            </div>
          </div>
        </div>
        <button
          className='cardProduct_detail_button'
          onClick={() => ShoppingCart.addProduct(product)}
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
