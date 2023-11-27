import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ visible, onClose, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal_content'>
        <div className='modal-header_options'>
          <button className='close-button' onClick={onClose}>
            Cerrar
          </button>
        </div>
        <div className='modal_content_children'>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
