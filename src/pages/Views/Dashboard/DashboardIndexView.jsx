import MetricInfo from '../../../components/all/MetricInfo/MetricInfo';
import StockTable from '../../../components/all/StockTable/StockTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../../../stores/actions/productActions';
import { useEffect } from 'react';

export const DashboardIndexView = (props) => {
  const {
    productReducer: { products_list },
    getProduct,
  } = props;

  useEffect(() => {
    if (products_list === null) {
      getProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='index_dashboard-container'>
      <section className='section_stock'>
        <h3>Stock</h3>
        <div>
          {products_list !== null && <StockTable data={products_list} />}
        </div>
      </section>
      <section className='section_metrics'>
        <h3>Informacion</h3>
        <div className='section_metrics-infos'>
          <MetricInfo
            amount={10}
            icon='bi bi-clock'
            subject='Envios'
            title='Envios pendientes'
          />
          <MetricInfo
            amount={10}
            icon='bi bi-clock'
            subject='Envios'
            title='Envios pendientes'
          />
          <MetricInfo
            amount={10}
            icon='bi bi-clock'
            subject='Envios'
            title='Envios pendientes'
          />
          <MetricInfo
            amount={10}
            icon='bi bi-clock'
            subject='Envios'
            title='Envios pendientes'
          />
        </div>
      </section>
    </div>
  );
};

DashboardIndexView.propTypes = {
  productReducer: PropTypes.object,
  getProduct: PropTypes.func,
};

const mapStateToProps = ({ productReducer }) => {
  return {
    productReducer,
  };
};

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndexView);
