import React from 'react';
import { connect } from 'react-redux';
import { killPlayer, toggleDisplayMode, updateKeyState } from '../actions';
import Board from './Board';
import PlayerStats from './PlayerStats';
import GameWindowBtn from '../components/GameWindowBtn';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';

const GameWindow = ({ dispatch, mode }) => {
  return (
    <div>
      <header>
        <GameWindowBtn 
          onClick={() => dispatch(killPlayer())}
          text="MENU"
          icon="fas fa-arrow-left"
        />
        <GameWindowBtn 
          onClick={() => dispatch(toggleDisplayMode())}
          text={mode === PLAYER_VIEW_MODE ? "SEE ALL" : "PRO VIEW"}
          icon="fas fa-arrow-right"
          iconSide="right"
        />
      </header>
      
      <div className="game-window">
        <PlayerStats />
        <Board/>
      </div>
      <div className="arrow-keys">
        <div>
          <button 
            onTouchStart={() => dispatch(updateKeyState({38: true}))}
            onTouchEnd={() => dispatch(updateKeyState({ 38: false }))}            
          >
            <i className="fas fa-arrow-up"></i>
          </button>   
        </div>
        <div>
          <button
            onTouchStart={ () => dispatch(updateKeyState({ 37: true })) }
            onTouchEnd={() => dispatch(updateKeyState({ 37: false }))}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            onTouchStart={() => dispatch(updateKeyState({40: true}))}
            onTouchEnd={() => dispatch(updateKeyState({ 40: false }))}                        
          >
            <i className="fas fa-arrow-down"></i>
          </button>
          <button
            onTouchStart={() => dispatch(updateKeyState({39: true}))}
            onTouchEnd={() => dispatch(updateKeyState({ 39: false }))}                          
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(state => ({ mode: state.displayMode }))(GameWindow);