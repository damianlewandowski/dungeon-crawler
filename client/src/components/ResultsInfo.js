import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameWindowBtn from './GameWindowBtn';
import './ResultsInfo.css';

class ResultsInfo extends Component {
  componentDidMount() {
    // If boss is dead make a post request to update the leaderboard
    if(!this.props.bossAlive) {
      const data = {
        name: this.props.playerName,
        level: this.props.level,
        weapon: this.props.weapon,
        armor: this.props.armor,
        time: this.props.time
      }
  
      fetch("https://cors-anywhere.herokuapp.com/https://dungeon-crawler-api.herokuapp.com/leaderboard", {
        method: "POST",
        headers: new Headers({  
          "Content-Type":"application/json",
        }),
        body: JSON.stringify(data),
      })
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(console.log("Something went wrong with making post request :("))
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