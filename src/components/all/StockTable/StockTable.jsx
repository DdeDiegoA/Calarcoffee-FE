import PropTypes from 'prop-types';
import { formatPriceCop } from '../../../utils/formatPrice';
import './StockTable.css';

const StockTable = (props) => {
  const { data } = props;

  return (
    <div className='stock-container'>
      <table className='table'>
        <thead className='table__row table_head'>
          <th className='table__cell'>ID</th>
          <th className='table__cell'>Nombre</th>
          <th className='table__cell'>Cantidad</th>
          <th className='table__cell'>Categoria</th>
          <th className='table__cell'>Precio unitario</th>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr className='table__row' key={product.id}>
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
  data: PropTypes.object.isRequired,
};

export default StockTable;
