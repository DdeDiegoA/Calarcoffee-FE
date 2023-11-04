import ProductCard from '../../../components/all/ProductCard/ProductCard';
import ProductFilter from '../../../components/all/ProductFilter/ProductFilter';
import './MarketPlace.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../../../stores/actions/productActions';
import { useEffect } from 'react';

export const MarketPlace = (props) => {
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
    <div className='marketPlace_container'>
      <section className='marcketPlace_content'>
        <div className='row products'>
          {/* producto */}
          {products_list !== null &&
            products_list.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </section>
      <ProductFilter />
    </div>
  );
};

MarketPlace.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);
