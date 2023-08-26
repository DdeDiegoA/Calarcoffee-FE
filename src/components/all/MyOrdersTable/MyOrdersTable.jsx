import './MyOrdersTable.css';
import PropTypes from 'prop-types';

const MyOrdersTable = (props) => {
  const { data } = props;
  const pillStyle = {
    1: '#b9b9b9',
    2: '#772409',
    3: '#7bb85b',
  };

  return (
    <div className='my_orders-container'>
      <table className='table'>
        <thead className='table__row table_head'>
          <th className='table__cell'>Número de Factura</th>
          <th className='table__cell'>Estado</th>
          <th className='table__cell'>Acciones</th>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr className='table__row' key={order.id}>
              <td className='table__cell '>{order.bill_number}</td>
              <td className='table__cell '>
                <span
                  className='pill'
                  style={{ backgroundColor: pillStyle[order.state.state_id] }}
                >
                  {order.state?.state_name}
                </span>
              </td>
              <td className='table__cell table__cell-actions'>
                <button className='button_info'>
                  <i className='bi bi-info-circle-fill' />
                </button>
                {/* <button className=''>Eliminar</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MyOrdersTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MyOrdersTable;
