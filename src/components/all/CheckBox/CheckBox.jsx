import PropTypes from 'prop-types';
import './CheckBox.css';

const CheckBox = ({ label, children, onChange, value }) => {
  return (
    <div className='cntr'>
      <input
        type='checkbox'
        id='cbx'
        className='hidden-xs-up'
        checked={value}
        onChange={() => onChange()}
      />
      <label htmlFor='cbx' className='cbx'></label>
      <label className={'checkbox_label'} htmlFor='cbx'>
        {label || children}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export default CheckBox;
