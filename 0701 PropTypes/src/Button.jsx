import React from 'react';
import PropTypes from 'prop-types';

const Button = ({margin, width, disabled, children}) => {
  return (
    <button
      style={{
        margin: margin,
        width: `${width}px`,
        height: `${width / 3}px`,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
