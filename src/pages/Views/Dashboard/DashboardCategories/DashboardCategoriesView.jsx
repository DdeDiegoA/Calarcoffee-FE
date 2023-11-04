import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesTable from '../../../../components/all/CategoriesTable/CategoriesTable';
import InputAnimated from '../../../../components/all/inputAnimated/InputAnimated';
import {
  getCategoriesList,
  setDashboardCategorieslist,
} from '../../../../stores/actions/dashboardActions';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

export const DashboardCategoriesView = (props) => {
  const {
    dashboardReducer: { dashboard_categories_list },
    getCategoriesList,
    setDashboardCategorieslist,
  } = props;

  useEffect(() => {
    if (dashboard_categories_list === null) {
      getCategoriesList();
    }
    return () => {
      setDashboardCategorieslist(null);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='index_dashboard-container'>
      <h2>Categories</h2>
      <div className='row'>
        {dashboard_categories_list ? (
          <CategoriesTable data={dashboard_categories_list} />
        ) : (
          <div>
            <Spinner />
          </div>
        )}
        <div className='col-md-6'>
          <div>
            <InputAnimated
              icon='bi bi-envelope-at-fill'
              isRequired={true}
              label='Nombre de la categoria'
              placeholder='Nombre de la categoria'
              type='text'
            />
            <button>Agregar nuevo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardCategoriesView.propTypes = {
  dashboardReducer: PropTypes.object,
  getCategoriesList: PropTypes.func,
  setDashboardCategorieslist: PropTypes.func,
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { dashboardReducer };
};

const mapDispatchToProps = {
  getCategoriesList,
  setDashboardCategorieslist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCategoriesView);
