import PropTypes from 'prop-types';
import { useState } from 'react';
import './InputStatic.css';

const InputStatic = (props) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { isRequired, placeholder, label, inputId, type, value, onChange } =
    props;
  const typeOfVisible = visiblePassword ? 'text' : 'password';

  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className='inputStaticContainer'>
      <input
        required={isRequired ? 'required' : ''}
        id={inputId}
        className={`staticInput ${type === 'number' ? 'input_number' : ''}`}
        placeholder={placeholder}
        type={type === 'password' ? typeOfVisible : type}
        value={value}
        onChange={handleChange}
      />
      {type === 'password' && (
        <i
          onClick={() => setVisiblePassword(!visiblePassword)}
          className={`${
            visiblePassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'
          } staticEyeIcon`}
        />
      )}
      <label className='staticInputLabel' htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};

InputStatic.propTypes = {
  isRequired: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
export default InputStatic;
