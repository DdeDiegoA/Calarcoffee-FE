import PropTypes from 'prop-types';
import './CategoriesTable.css';
const CategoriesTable = ({ data }) => {
  return (
    <div className='categories_table_container'>
      <table className='table'>
        <thead className=' table_head'>
          <tr className='table__row'>
            <th className='table__cell'>ID</th>
            <th className='table__cell'>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category, index) => (
            <tr className='table__row' key={index}>
              <td className='table__cell '>{category.id}</td>
              <td className='table__cell '>{category.name}</td>
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
