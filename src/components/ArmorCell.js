import React from 'react';
// import enemyImg from '../images/enemy.png';


const ArmorCell = ({ posStyle, style }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      
    </li>
  );
};

export default ArmorCell;