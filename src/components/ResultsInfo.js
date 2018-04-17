import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameWindowBtn from './GameWindowBtn';
import './ResultsInfo.css';

class ResultsInfo extends Component {
  render() {
  const {
      level, 
      weapon, 
      armor, 
      dungeonLevel, 
      time, 
      bossAlive
    } = this.props;

    return (
      <div className="ResultsInfo">
        <h1>{bossAlive ? "You died! :(" : "Congratulations! You beat the freaking diablo!" }</h1>
        <h3>It took you {time} to reach {dungeonLevel} dungeon level.</h3>
        <h5>Your level: <strong>{level}</strong></h5>
        <p>You had <strong>{weapon}</strong> and <strong>{armor}</strong></p>
        <GameWindowBtn>
          <Link to="/" style={{ textDecoration: "none" }}>
            <i className="fas fa-arrow-left"></i>
            <span>MENU</span>     
          </Link>
        </GameWindowBtn>
      </div>
    )
  }
}

export default ResultsInfo;