import React from 'react';

const EntityCell = ({ posStyle, style, children }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      {children}
    </li>
  );
};

export default EntityCell;