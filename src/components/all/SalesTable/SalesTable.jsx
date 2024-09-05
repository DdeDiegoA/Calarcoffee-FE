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
              <td className='table__cell '>{product.bill}</td>
              <td className='table__cell '>{product.Products[0].name}</td>
              <td className='table__cell table__cell-actions'>
                {formatPriceCop(product.bigTotal)}
              </td>
              <td className='table__cell table__cell-actions'>
                {product?.Guide.Status.name}
              </td>
              <td className='table__cell table__cell-actions'>
                <button className='button_info'>
                  <i className='bi bi-info-circle-fill' />
                </button>
                {product?.Guide.Status.nameEn !== 'Delivered' && (
                  <button className='editStock-button'>
                    {`${
                      product?.Guide.Status.nameEn === 'Pending' &&
                      'Marcar en camino'
                    }
                    ${
                      product?.Guide.Status.nameEn === 'On the way'
                        ? 'Marcar entregado'
                        : ''
                    }`}
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
