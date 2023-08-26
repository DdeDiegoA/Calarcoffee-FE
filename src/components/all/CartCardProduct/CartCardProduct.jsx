import { useState } from 'react';
import './CartCardProduct.css';
import { formatPriceCop } from '../../../utils/formatPrice';

const CartCardProduct = () => {
  const [amount, setAmount] = useState(1);
  return (
    <article className='CartCardProduct_container'>
      <img src='https://placekitten.com/200/200' />
      <div className='CartCardProduct_content'>
        <div className='CartCardProduct_content_row'>
          <h3>CAFE DE CAFE CALARCA 100GCAFE DE CAFE CALARCA </h3>
          <i className='bi bi-trash-fill trashIcon' />
        </div>
        <div className='CartCardProduct_content_row'>
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
          <div className='CartCardProduct_content_price'>
            <span>{formatPriceCop(40000 * amount)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartCardProduct;
