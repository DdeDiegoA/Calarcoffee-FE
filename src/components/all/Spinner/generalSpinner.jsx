import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import './generalSpinner.css';
import calarCoffeLogo from '../../../assets/images/logoCalarCoffe.webp';

export const generalSpinner = (props) => {
  const {
    globalReducer: { global_general_spinner },
  } = props;

  return (
    <div
      className={` ${
        global_general_spinner.open ? 'd-flex' : 'd-none'
      } spinner-container`}
    >
      <img
        className='pe-4'
        src={calarCoffeLogo}
        width={'180px'}
        alt={'calarCoffee-logo'}
      />
      <Spinner />
      <p className=' fc-s-brown fw-bold'>{global_general_spinner.message}</p>
    </div>
  );
};

generalSpinner.propTypes = {
  globalReducer: PropTypes.object,
};

const mapStateToProps = ({ globalReducer }) => {
  return {
    globalReducer,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(generalSpinner);
