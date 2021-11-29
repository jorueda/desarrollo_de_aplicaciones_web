import React from 'react';

const Button = ({
  isFocused,
  withoutBorders,
  borderRadius = null,
  onClick,
  children,
}) => {
  const decorator = isFocused ? 'primary' : 'outline-secondary';
  const borderDecorator = withoutBorders ? `border-end-0  border-start-0` : ``;

  return (
    <button
      key="action-1"
      className={`btn btn-${decorator} w-100 ${borderDecorator}`}
      onClick={onClick}
      style={{ borderRadius: borderRadius || '0px' }}
    >
      {children}
    </button>
  );
};

export default Button;
