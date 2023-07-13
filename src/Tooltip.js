import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && <span className="tooltip-text">{text}</span>}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Tooltip;
