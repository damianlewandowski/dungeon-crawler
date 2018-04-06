import React from 'react';
// import Menu from './Menu';
import Board from '../containers/Board';
import ModeBtn from '../containers/ModeBtn';
import './App.css';

const App = () => {
  return (
    <div className="container">
      {/* <Menu /> */}
      <ModeBtn />
      <Board/>
    </div>
  );
};

export default App;