import { connect } from 'react-redux';
import ProductsTable from '../../../../components/all/ProductsTable/ProductsTable';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getProduct } from '../../../../stores/actions/productActions';

const DashboardProductsView = (props) => {
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
      <h2>products</h2>
      <div className='d-flex flex-column'>
        <button className='mb-3 btn align-self-end btn-success'>
          Crear Producto
        </button>
        {products_list !== null && <ProductsTable data={products_list} />}
      </div>
    </div>
  );
};

DashboardProductsView.propTypes = {
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardProductsView);
