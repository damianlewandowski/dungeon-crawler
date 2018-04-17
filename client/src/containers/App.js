import React from 'react';
import { connect } from 'react-redux';
import {
  playSound,
} from '../actions';
import ReactAudioPlayer from 'react-audio-player';
import { clearBoard } from '../actions';
import './App.css';
import GameWindow from './GameWindow';
import Results from './Results';

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.playSound) {
      this.playSound(nextProps.soundPath)
      this.props.dispatch(playSound(false));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearBoard());
  }

  playSound = src => {
    this.sound.audioEl.src = src;
    this.sound.audioEl.play();
  }
  
  render() {
    const { playerAlive, bossAlive } = this.props;

    return (
      <div className="container">
        <ReactAudioPlayer ref={element => { this.sound = element }}/> 
        {
          playerAlive && bossAlive 
            ? <GameWindow history={this.props.history} />
            : <Results />
        }
      </div>
    );
  }
}  

const mapStateToProps = ({ sound, player, bossAlive }) => ({
  playSound: sound.playSound,
  soundPath: sound.soundPath,
  playerAlive: player.alive,
  bossAlive
})

export default connect(mapStateToProps)(App);