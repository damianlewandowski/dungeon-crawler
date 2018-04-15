import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  playSound,
} from '../actions';
import ReactAudioPlayer from 'react-audio-player';
import { clearBoard } from '../actions';
import './App.css';
import GameWindow from './GameWindow';

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

  playSound = (src) => {
    this.sound.audioEl.src = src;
    this.sound.audioEl.play();
  }
  
  render() {
    const { alive } = this.props;

    return (
      <div className="container">
        <ReactAudioPlayer ref={element => { this.sound = element }}/> 
        {
          alive 
            ? <GameWindow />
            : <Redirect to="/" />
        }
      </div>
    );
  }
}  

const mapStateToProps = ({ sound, player }) => ({
  playSound: sound.playSound,
  soundPath: sound.soundPath,
  alive: player.alive
})

export default connect(mapStateToProps)(App);