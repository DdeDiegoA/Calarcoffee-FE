import PropTypes from 'prop-types';
import { formatPriceCop } from '../../../utils/formatPrice';
const SalesTable = ({ data }) => {
  return (
    <div className='products_table_container'>
      <table className='table'>
        <thead className=' table_head'>
          <tr className='table__row'>
            <th className='table__cell'>N° Factura</th>
            <th className='table__cell'>Nombre</th>
            <th className='table__cell'>Valor</th>
            <th className='table__cell'>Estado</th>
            <th className='table__cell'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr className='table__row' key={index}>
              <td className='table__cell '>{product.bill_number}</td>
              <td className='table__cell '>{product.product_name}</td>
              <td className='table__cell table__cell-actions'>
                {formatPriceCop(product.total_price)}
              </td>
              <td className='table__cell table__cell-actions'>
                {product?.status.state_name}
              </td>
              <td className='table__cell table__cell-actions'>
                <button className='button_info'>
                  <i className='bi bi-info-circle-fill' />
                </button>
                {product?.status.state_id !== 3 && (
                  <button className='editStock-button'>
                    {`${product?.status.state_id === 1 && 'Marcar en camino'}
                  ${product?.status.state_id === 2 && 'Marcar entregado'}`}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SalesTable.propTypes = {
  data: PropTypes.array.isRequired,
};
export default SalesTable;
