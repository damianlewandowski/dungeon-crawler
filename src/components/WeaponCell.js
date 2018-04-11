import React from 'react';

const WeaponCell = ({ posStyle, style }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      
    </li>
  );
};

export default WeaponCell;