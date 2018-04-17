import React, { Component } from 'react';
import MenuLink from './MenuLink';
import './Menu.css';

// "menu option": "url_address"
const OPTIONS = {
  "start": "name",
  "instructions": "instructions",
  "options": "options",
  "leaderboard": "leaderboard"
}

class Menu extends Component {
  render() {
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
  }
};

export default Menu;