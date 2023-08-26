import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const Select = ({
  options,
  label,
  icon,
  selectId,
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const blurTimeout = useRef();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    blurTimeout.current = setTimeout(() => {
      setIsFocused(false);
    }, 100); // Agregamos un pequeño retraso para dar tiempo al clic en la opción
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setFilteredOptions(options);
  };

  const handleOptionClick = (option) => {
    clearTimeout(blurTimeout.current); // Cancelamos el retraso si se hace clic en una opción
    handleOptionSelect(option);
    setIsFocused(false);
  };

  return (
    <div className='custom-select'>
      <div className={`inputContainer`}>
        <input
          id={selectId}
          type='text'
          value={value || ''}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          autoComplete='off'
          className={`selectInput ${value ? 'filled' : ''}`}
          placeholder={placeholder}
        />
        <i
          className='bi bi-chevron-down select_down_icon'
          onClick={handleInputFocus}
        ></i>
        <label htmlFor={selectId} className={`selectInputLabel`}>
          {label || 'hola'}
        </label>
        <i className={`${icon} selectInputIcon`} />
      </div>
      <div
        className={`options-container ${isFocused ? 'options_visible' : ''}`}
      >
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            className='option'
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  selectId: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Select;
