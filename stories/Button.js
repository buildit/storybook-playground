import React from 'react';
import'./style.css';

const Button = ({ children, onClick }) => (
  <button
    className="my-button-style"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
