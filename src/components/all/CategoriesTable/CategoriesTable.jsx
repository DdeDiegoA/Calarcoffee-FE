import PropTypes from 'prop-types';
import './CategoriesTable.css';
const CategoriesTable = ({ data }) => {
  return (
    <div className='categories_table_container col-md-6'>
      <table className='table'>
        <thead className=' table_head'>
          <tr className='table__row'>
            <th className='table__cell'>ID</th>
            <th className='table__cell'>Nombre</th>
            <th className='table__cell'>Slug</th>
            <th className='table__cell'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category, index) => (
            <tr className='table__row' key={index}>
              <td className='table__cell '>{category.id}</td>
              <td className='table__cell '>{category.name}</td>
              <td className='table__cell '>{category.slug}</td>
              <td className='table__cell table__cell-actions'>
                <button className='edit-button'>
                  <i className='bi bi-pencil-square' />
                </button>
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

CategoriesTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CategoriesTable;
