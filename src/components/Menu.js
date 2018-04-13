import React from 'react';
import MenuLink from './MenuLink';
import './Menu.css';

const OPTIONS = {
  "start": "game_window",
  "instructions": "instructions",
  "options": "options",
  "leaderboard": "leaderboard"
}

const Menu = () => {
  const options = Object.keys(OPTIONS).map(optionKey => (
    <MenuLink
      to={OPTIONS[optionKey]}
      key={optionKey}
      text={optionKey}
    />
  ))

  return (
    <div className="Menu">
      <h1>Dungeon Crawler</h1>
      <ul className="options">
        {
          options
        }
        <li>
          <a 
            href="https://github.com/damianlewandowski/dungeon-crawler"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;