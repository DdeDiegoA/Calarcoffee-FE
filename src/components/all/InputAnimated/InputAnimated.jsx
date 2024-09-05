import PropTypes from 'prop-types';
import './InputAnimated.css';
import { useState } from 'react';

const InputAnimated = (props) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const typeOfVisible = visiblePassword ? 'text' : 'password';
  const { isRequired, placeholder, label, type, icon, value, onChange } = props;

  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className='inputContainer'>
      <input
        required={isRequired ? 'required' : ''}
        id='inputField'
        className={type === 'number' ? 'input_number' : ''}
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
          } eyeIcon`}
        />
      )}
      <label className='inputAnimatedLabel' htmlFor='inputField'>
        {label}
      </label>
      <i className={`${icon} inputAnimatedIcon`} />
    </div>
  );
};
InputAnimated.propTypes = {
  isRequired: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default InputAnimated;
