import MyData from '../../../components/all/MyData/MyData';
import MyOrdersTable from '../../../components/all/MyOrdersTable/MyOrdersTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserPayStatuses } from '../../../stores/actions/userActions';
import { useEffect } from 'react';
import { getCountriesOptions } from '../../../stores/actions/globalActions';

export const MyProfileView = (props) => {
  const {
    userReducer: { user_payStatuses },
    getUserPayStatuses,
    getCountriesOptions,
  } = props;

  useEffect(() => {
    if (user_payStatuses === null) {
      getUserPayStatuses();
    }
    getCountriesOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='row gap-3'>
      <div className='col-lg-6 flex-grow-1 changes_data_container'>
        <MyData />
        <div className='w-100 d-flex justify-content-center'>
          <button>Guardar cambios</button>
        </div>
      </div>
      <div className='col-lg-4  flex-grow-1 my_orders'>
        {user_payStatuses !== null && <MyOrdersTable data={user_payStatuses} />}
      </div>
    </div>
  );
};

MyProfileView.propTypes = {
  userReducer: PropTypes.array,
  getUserPayStatuses: PropTypes.func,
  getCountriesOptions: PropTypes.func,
};

const mapStateToProps = ({ userReducer }) => {
  return {
    userReducer,
  };
};

const mapDispatchToProps = {
  getUserPayStatuses,
  getCountriesOptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileView);
