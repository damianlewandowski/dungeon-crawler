import React from 'react';
// import Menu from './Menu';
import Board from '../containers/Board';
import ModeBtn from '../containers/ModeBtn';
import PlayerStats from '../containers/PlayerStats';
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

const App = () => {
  return (
    <div className="container">
      {/* <Menu /> */}

      <div className="game-window">
        <PlayerStats />
        <Board/>
        <ModeBtn />
      </div>

    </div>
  );
};

export default App;