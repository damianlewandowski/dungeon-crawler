import React from 'react';

const StairsCell = ({ posStyle, style }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      
    </li>
  );
};

export default StairsCell;