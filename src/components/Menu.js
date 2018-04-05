import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import './Menu.css';

const OPTIONS = [
  "start",
  "instructions",
  "options",
  "leaderboard",
]

const Menu = () => {
  const options = OPTIONS.map(option => (
    <MenuItem 
      key={option}
      text={option}
    />
  ))

  const handleHover = () => {

  }

  return (
    <div className="Menu">
      <h1>Dungeon Crawler</h1>
      <ul className="options">
        {options
        }
        <li><a href="#">See Code</a></li>
      </ul>
    </div>
  );
};

export default Menu;