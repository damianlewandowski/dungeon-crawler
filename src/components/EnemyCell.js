import React from 'react';
import enemyImg from '../images/enemy.png';

const style = {
  position: 'absolute',
  background: `url(${enemyImg})`,
  backgroundSize: "cover",
}

const EnemyCell = ({ posStyle }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      
    </li>
  );
};

export default EnemyCell;