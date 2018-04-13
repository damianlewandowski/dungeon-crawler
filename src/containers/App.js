import React from 'react';
import { connect } from 'react-redux';
import {
  playSound
} from '../actions';
// import Menu from './Menu';
import Board from './Board';
import ModeBtn from './ModeBtn';
import PlayerStats from './PlayerStats';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';



class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.playSound) {
      this.playSound(nextProps.soundPath)
      this.props.dispatch(playSound(false));
    }
  }

  playSound = (src) => {
    this.sound.audioEl.src = src;
    this.sound.audioEl.play();
  }
  
  render() {
    return (
      <div className="container">
        {/* <Menu /> */}
        <ReactAudioPlayer ref={element => { this.sound = element }}/>
        <div className="game-window">
          <PlayerStats />
          <Board/>
        </div>
          <ModeBtn />
      </div>
    );
  }
}  

const mapStateToProps = ({ sound }) => ({
  playSound: sound.playSound,
  soundPath: sound.soundPath,
  
})

export default connect(mapStateToProps)(App);