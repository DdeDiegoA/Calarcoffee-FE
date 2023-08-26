import PropTypes from 'prop-types';
import { formatPriceCop } from '../../../utils/formatPrice';
import './StockTable.css';

const StockTable = (props) => {
  const { data } = props;

  return (
    <div className='stock-container'>
      <table className='table'>
        <thead className=' table_head'>
          <tr className='table__row'>
            <th className='table__cell'>ID</th>
            <th className='table__cell'>Nombre</th>
            <th className='table__cell'>Cantidad</th>
            <th className='table__cell'>Categoria</th>
            <th className='table__cell'>Precio unitario</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr className='table__row' key={index}>
              <td className='table__cell '>{product.id}</td>
              <td className='table__cell '>{product.product_name}</td>
              <td className='table__cell table__cell-actions'>
                {product.amount}
              </td>
              <td className='table__cell table__cell-actions'>
                {product.category}
              </td>
              <td className='table__cell table__cell-actions'>
                {formatPriceCop(product.unit_price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
StockTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default StockTable;
