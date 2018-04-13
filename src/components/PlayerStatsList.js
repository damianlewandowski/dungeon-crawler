import React from 'react';
import Bar from '../components/Bar';
import './PlayerStatsList.css';

const PlayerStatsList = ({ hp, maxHp, level, weapon, armor, exp, dungeonLevel }) => {
  return (
    <ul className="PlayerStatsList">
      <li>
        <h4>HEALTH</h4>
        <p>{hp} / {maxHp}</p>
        <Bar 
          val={(hp / maxHp) * 100}
          foreground="#f00"
          background="#fff"
        />
      </li>
      <li>
        <h4>EXP</h4>
        <p>{exp} %</p>
        <Bar 
          val={exp}
          foreground="linear-gradient(#00ff99, #00cd7b)"
          background="#fff"
        />
      </li>
      <li><h4>LEVEL</h4>{level}</li>
      <li>
        <h4>WEAPON</h4>
        <img src={weapon.img} alt="weapon"/>
        <p>{weapon.name}</p>
      </li>
      <li>
        <h4>ARMOR</h4>
        <img src={armor.img} alt="armor"/>
        <p>{armor.name}</p>
      </li>
      <li><h4>DUNGEON LEVEL</h4>{dungeonLevel}</li>      
    </ul>
  );
};

export default PlayerStatsList;