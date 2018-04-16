import React from 'react';
import { connect } from 'react-redux';
import {
  playSound,
} from '../actions';
import ReactAudioPlayer from 'react-audio-player';
import { clearBoard } from '../actions';
import './App.css';
import GameWindow from './GameWindow';
import Results from '../components/Results';
import { determineTime } from '../util/util';

class App extends React.Component {
  componentDidMount() {
    const { 
      playerLevel,
      weapon,
      armor,
      time,
      name
    } = this.props;

    fetch("https://cors-anywhere.herokuapp.com/https://dungeon-crawler-api.herokuapp.com/leaderboard", {
      body: JSON.stringify({
        name,
        playerLevel,
        weapon,
        armor,
        time,
      }),
      method: "POST",
      headers: {  
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      },
    })
    .then(res => console.log(res))
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.playSound) {
      this.playSound(nextProps.soundPath)
      this.props.dispatch(playSound(false));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearBoard());
  }

  playSound = (src) => {
    this.sound.audioEl.src = src;
    this.sound.audioEl.play();
  }
  
  render() {
    const { 
      playerAlive, 
      playerLevel,
      bossAlive,
      dungeonLevel,
      weapon,
      armor,
      time,
    } = this.props;
    
    return (
      <div className="container">
        <ReactAudioPlayer ref={element => { this.sound = element }}/> 
        {
          playerAlive && bossAlive 
            ? <GameWindow history={this.props.history} />
            : <Results 
                level={playerLevel}
                dungeonLevel={dungeonLevel}
                weapon={weapon}
                armor={armor}
                time={time}
                bossAlive={bossAlive}
              />
        }
      </div>
    );
  }
}  

const mapStateToProps = ({ sound, player, dungeonLevel, seconds, bossAlive }) => ({
  playSound: sound.playSound,
  soundPath: sound.soundPath,
  playerAlive: player.alive,
  bossAlive: bossAlive,
  playerLevel: player.level,
  weapon: player.weapon.name,
  armor: player.armor.name,
  dungeonLevel: dungeonLevel,
  time: determineTime(seconds),
  name: player.name,
})

export default connect(mapStateToProps)(App);