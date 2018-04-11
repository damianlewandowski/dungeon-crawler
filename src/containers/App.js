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

// const LevelBar = ({ val, foreground, background }) => (
//   <div
//     style={{
//       width: "100%",
//       height: "5px",
//       background: background,
//       position: "relative",
//       marginTop: "10px",
//     }}
//   >

//     <div
//       style={{
//         height: "5px",
//         width: `${val}%`,
//         background: foreground,
//         position: "absolute",
//         top: 0,
//         left: 0
//       }}
//     />

//   </div>
// )

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
          <ModeBtn />
        </div>
      </div>
    );
  }
}  

const mapStateToProps = ({ sound }) => ({
  playSound: sound.playSound,
  soundPath: sound.soundPath,
})

export default connect(mapStateToProps)(App);