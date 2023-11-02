import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesTable from '../../../../components/all/CategoriesTable/CategoriesTable';
import InputAnimated from '../../../../components/all/inputAnimated/InputAnimated';

export const DashboardCategoriesView = (props) => {
  const data = [
    {
      id: 12312,
      name: 'cafe',
    },
    {
      id: 12312,
      name: 'metodo',
    },
    {
      id: 12312,
      name: 'promocion!!',
    },
  ];
  return (
    <div className='index_dashboard-container'>
      <h2>Categories</h2>
      <div className='row'>
        <CategoriesTable data={data} />
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
  second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCategoriesView);
