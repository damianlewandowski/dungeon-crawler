import React from 'react';
import potionImg from '../images/hp_potion.png';

const style = {
  position: 'absolute',
  background: `url(${potionImg})`,
  backgroundSize: "cover",
}

const PotionCell = ({ posStyle }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      
    </li>
  );
};

export default PotionCell;