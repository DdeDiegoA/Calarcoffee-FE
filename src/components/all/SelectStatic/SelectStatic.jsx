import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectStatic.css';

const SelectStatic = ({
  options,
  label,
  icon,
  selectId,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const blurTimeout = useRef();
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);
    const filtered = options.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  useEffect(() => {}, [options]);

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
    <div className='customStatic-select'>
      <div className={`staticInput_container`}>
        <input
          id={selectId}
          type='text'
          value={value || ''}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          autoComplete='off'
          className={`staticselect_Input ${value ? 'filled' : ''}`}
          placeholder={placeholder}
          disabled={disabled}
        />
        <i
          className='bi bi-chevron-down select_down_icon'
          onClick={handleInputFocus}
        ></i>
        <label htmlFor={selectId} className={`staticSelect_InputLabel`}>
          {label || 'hola'}
        </label>
        <i className={`${icon} selectInputIcon`} />
      </div>
      <div
        className={`options-container ${isFocused ? 'options_visible' : ''}`}
      >
        {filteredOptions !== null &&
          filteredOptions.map((option, index) => (
            <div
              key={index}
              className='option'
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
      </div>
    </div>
  );
};

SelectStatic.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  selectId: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default SelectStatic;
