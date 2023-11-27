import { connect } from 'react-redux';
import ProductsTable from '../../../../components/all/ProductsTable/ProductsTable';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getProduct } from '../../../../stores/actions/productActions';
import Modal from '../../../../components/all/Modal/Modal';
import CreateProductForm from '../../../../components/forms/CreateProductForm/CreateProductForm';
import EditProductForm from '../../../../components/forms/EditProductForm/EditProductForm';

const DashboardProductsView = (props) => {
  const {
    productReducer: { products_list },
    getProduct,
  } = props;
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState('');

  const onVisible = (visible) => {
    setVisible(true);
    setFormVisible(visible);
  };

  const onClose = () => {
    setVisible(false);
    setFormVisible('');
  };

  useEffect(() => {
    if (products_list === null) {
      getProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal visible={visible} onClose={onClose}>
        {formVisible === 'create' && <CreateProductForm />}
        {formVisible === 'edit' && <EditProductForm />}
      </Modal>
      <div className='index_dashboard-container'>
        <h2>products</h2>
        <div className='d-flex flex-column'>
          <button
            className='mb-3 btn align-self-end btn-success'
            onClick={() => onVisible('create')}
          >
            Crear Producto
          </button>
          {products_list !== null && (
            <ProductsTable data={products_list} onOpen={onVisible} />
          )}
        </div>
      </div>
    </>
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
