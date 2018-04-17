import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsInfo from '../components/ResultsInfo'
import { determineTime } from '../util/util';

class Results extends Component {
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
      playerAlive,
      bossAlive,
      level,
      weapon,
      armor,
      dungeonLevel,
      time,
      playerName,
    } = this.props;

    return (
      <ResultsInfo 
        playerAlive={playerAlive}
        bossAlive={bossAlive}
        level={level}
        weapon={weapon}
        armor={armor}
        dungeonLevel={dungeonLevel}
        time={time}
        playerName={playerName}
      />
    )
  }
  
}

const mapStateToProps = ({ player, dungeonLevel, seconds, bossAlive }) => ({
  playerAlive: player.alive,
  bossAlive: bossAlive,
  level: player.level,
  weapon: player.weapon.name,
  armor: player.armor.name,
  dungeonLevel: dungeonLevel,
  time: determineTime(seconds),
  playerName: player.name,
})

export default connect(mapStateToProps)(Results)