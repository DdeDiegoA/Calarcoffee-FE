import PropTypes from 'prop-types';
import { formatPriceCop } from '../../../utils/formatPrice';
import { connect } from 'react-redux';
import './ProductsTable.css';
import { getProductById } from '../../../stores/actions/productActions';

const ProductsTable = ({ data, onOpen, getProductById }) => {
  const onEdit = (id) => {
    getProductById(id);
    onOpen('edit');
  };

  return (
    <div className='products_table_container'>
      <table className='table'>
        <thead className=' table_head'>
          <tr className='table__row'>
            <th className='table__cell'>ID</th>
            <th className='table__cell'>Nombre</th>
            <th className='table__cell'>Cantidad</th>
            <th className='table__cell'>Categoria</th>
            <th className='table__cell'>Precio unitario</th>
            <th className='table__cell'>Acciones</th>
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
              <td className='table__cell table__cell-actions'>
                <button
                  className='edit-button'
                  onClick={() => onEdit(product.id)}
                >
                  <i className='bi bi-pencil-square' />
                </button>
                <button className='editStock-button'>Stock</button>
                <button className='delete-button'>
                  <i className='bi bi-trash-fill' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductsTable.propTypes = {
  data: PropTypes.array.isRequired,
  onOpen: PropTypes.func,
  getProductById: PropTypes.func,
};

const mapStateToProps = ({ productReducer }) => {
  return {
    productReducer,
  };
};

const mapDispatchToProps = {
  getProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);
