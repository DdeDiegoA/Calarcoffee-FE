import PropTypes from 'prop-types';
import { formatPriceCop } from '../../../utils/formatPrice';
import './CartCardProduct.css';
import ShoppingCart from '../../../utils/cartManager';
const CartCardProduct = (props) => {
  const {
    element: { product, amount },
  } = props;

  return (
    <article className='CartCardProduct_container'>
      <img src={product.ProductImages[0].src} />
      <div className='CartCardProduct_content'>
        <div className='CartCardProduct_content_row'>
          <h3>{product.name}</h3>
          <i
            className='bi bi-trash-fill trashIcon'
            onClick={() => ShoppingCart.removeProduct(product.id)}
          />
        </div>
        <div className='CartCardProduct_content_row'>
          <div className='CartCardProduct_content_addRemoveProduct'>
            <button onClick={() => ShoppingCart.decreaseAmount(product.id)}>
              <i className='bi bi-dash' />
            </button>
            <div>
              <span>{amount}</span>
            </div>
            <button onClick={() => ShoppingCart.increaseAmount(product.id)}>
              <i className='bi bi-plus' />
            </button>
          </div>
          <div className='CartCardProduct_content_price'>
            <span>{formatPriceCop(product.price * amount)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

CartCardProduct.propTypes = {
  element: PropTypes.object,
};
export default CartCardProduct;
