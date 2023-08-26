import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CollapsibleButton = ({
  dropDownClassName,
  dropDownName,
  icon,
  idName,
  options,
}) => {
  return (
    <Dropdown className={dropDownClassName}>
      <Dropdown.Toggle id={idName}>
        {icon ? <i className={icon}></i> : dropDownName}
      </Dropdown.Toggle>

      <Dropdown.Menu align={{ Xlg: 'start' }}>
        {options.map((option, index) => {
          if (option.link) {
            return (
              <Link className='dropdown-item' key={index} to={option.link}>
                {option.name}
              </Link>
            );
          }
          if (option.function) {
            return (
              <a
                className='dropdown-item'
                key={index}
                onClick={option.function}
              >
                {option.name}
              </a>
            );
          }
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CollapsibleButton.propTypes = {
  dropDownClassName: PropTypes.string,
  dropDownName: PropTypes.string,
  icon: PropTypes.string,
  idName: PropTypes.string.isRequired,
  options: PropTypes.array,
};

export default CollapsibleButton;
