import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import PropTypes from 'prop-types';
import './CollapseComponent.css';

const CollapseComponent = ({
  title,
  children,
  open,
  superTitle,
  target,
  extraClassName,
}) => {
  // eslint-disable-next-line no-extra-boolean-cast
  const haveTitle = !!target ? target : title;
  const [icon, setIcon] = useState('bi bi-caret-down-fill');
  const [disabled, setDisabled] = useState(false);

  function handleCollapserClick() {
    if (icon === 'bi bi-caret-down-fill') {
      setIcon('bi bi-caret-up-fill');
    } else {
      setIcon('bi bi-caret-down-fill');
    }

    setDisabled(!disabled);
  }

  return (
    <div className={extraClassName}>
      <Button
        className='collapser'
        onClick={() => handleCollapserClick()}
        data-target={`#${haveTitle}From`}
        aria-controls={`${haveTitle}From`}
        aria-expanded={open}
      >
        {title && <span className='collapser__title'>{title}</span>}
        {superTitle && <span className='superTitle'>{superTitle}</span>}

        <i className={icon}></i>
      </Button>
      <Collapse in={disabled} className='collapse_content'>
        <div id={`${haveTitle}From`}>{children}</div>
      </Collapse>
    </div>
  );
};

CollapseComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  superTitle: PropTypes.string,
  target: PropTypes.string,
  extraClassName: PropTypes.string,
};

export default CollapseComponent;
