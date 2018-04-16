import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameWindowBtn from './GameWindowBtn';
import './Results.css';

class Results extends Component {
  componentDidMount() {
    // If boss is dead make a post request to update the leaderboard
    if(!this.props.bossAlive) {
      const data = {
        level: this.props.level,
        weapon: this.props.weapon,
        armor: this.props.armor,
        time: this.props.time
      }
      fetch("localhost:3001/leaderboard", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {  
          "Content-type":"application/json"  
        },
        mode: 'no-cors',
      }).then(res => console.log(res.json()))
    }
  }

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
      <div className="Results">
        <h1>{bossAlive ? "You died! :(" : "Congratulations! You beat the freaking diablo!" }</h1>
        <h3>It took you {time} to reach {dungeonLevel}</h3>
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

export default Results;