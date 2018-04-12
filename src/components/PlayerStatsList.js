import React from 'react';
import Bar from '../components/Bar';
import './PlayerStatsList.css';

const PlayerStatsList = ({ hp, maxHp, level, weapon, armor, exp }) => {
  return (
    <ul className="PlayerStatsList">
      <li>
        <h4>HEALTH</h4>
        <Bar 
          val={(hp / maxHp) * 100}
          foreground="#f00"
          background="#fff"
        />
        {hp}
      </li>
      <li><h4>LEVEL</h4>{level}</li>
      <li><h4>EXP</h4>{exp}</li>
      <li><h4>WEAPON</h4>{weapon.name}</li>
      <li><h4>ARMOR</h4>{armor.name}</li>
    </ul>
  );
};

export default PlayerStatsList;