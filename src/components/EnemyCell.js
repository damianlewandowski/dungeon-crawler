import React from 'react';

const style = {
  position: 'absolute',
  background: "red",
}

const Enemy = ({ posStyle }) => {
  return (
    <li style={{
      ...style,
      ...posStyle
    }}>
      
    </li>
  );
};

export default Enemy;