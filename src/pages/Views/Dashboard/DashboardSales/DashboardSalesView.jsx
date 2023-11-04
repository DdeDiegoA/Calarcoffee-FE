import SalesTable from '../../../../components/all/SalesTable/SalesTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getPayStatusList,
  setDashboardPayStatuslist,
} from '../../../../stores/actions/dashboardActions';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

export const DashboardSalesView = (props) => {
  const {
    dashboardReducer: { dashboard_payStatus_list },
    getPayStatusList,
    setDashboardPayStatuslist,
  } = props;

  useEffect(() => {
    if (dashboard_payStatus_list === null) {
      getPayStatusList();
    }
    return () => {
      setDashboardPayStatuslist(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = [
    {
      bill_number: 'F2312312',
      product_name: 'Calarca geisha 360gr',
      total_price: 45000,
      status: {
        state_id: 3,
        state_name: 'Entregado',
      },
    },
  ];
  return (
    <div className='index_dashboard-container'>
      <h2>sales</h2>
      {dashboard_payStatus_list ? (
        <SalesTable data={dashboard_payStatus_list} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

DashboardSalesView.propTypes = {
  dashboardReducer: PropTypes.object,
  getPayStatusList: PropTypes.func,
  setDashboardPayStatuslist: PropTypes.func,
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { dashboardReducer };
};

const mapDispatchToProps = { getPayStatusList, setDashboardPayStatuslist };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSalesView);
