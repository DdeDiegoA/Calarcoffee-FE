import PropTypes from 'prop-types';
import { formatPriceCop } from '../../../utils/formatPrice';
import './StockTable.css';

export const StockTable = (props) => {
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
          {data.map((product) => (
            <tr className='table__row' key={product.id}>
              <td className='table__cell '>{product.id}</td>
              <td className='table__cell '>{product.name}</td>
              <td className='table__cell table__cell-actions'>
                {product.inventory}
              </td>
              <td className='table__cell table__cell-actions'>
                {product.Categories[0].name}
              </td>
              <td className='table__cell table__cell-actions'>
                {formatPriceCop(product.price)}
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
