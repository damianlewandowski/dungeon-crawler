import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDisplayMode, updateKeyState, updateTicker } from '../actions';
import Board from './Board';
import PlayerStats from './PlayerStats';
import GameWindowBtn from '../components/GameWindowBtn';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';

class GameWindow extends Component {
  componentDidMount() {
    // Update ticker every second
    this.tickerId = setInterval(() => this.props.dispatch(updateTicker()), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.tickerId)
  }

  render() {
    const {
      dispatch, 
      mode, 
      history
    } = this.props;

    return (
      <div>
        <header>
          <GameWindowBtn 
            onClick={() => history.goBack()}
            text="MENU"
            icon="fas fa-arrow-left"
          >
            <i className="fas fa-arrow-left"></i>   
            <span>MENU</span>
          </GameWindowBtn>
          <GameWindowBtn 
            onClick={() => dispatch(toggleDisplayMode())}
            icon="fas fa-arrow-right"
            iconSide="right"
          >
            <span>{mode === PLAYER_VIEW_MODE ? "SEE ALL" : "PRO VIEW"}</span>
            <i className="fas fa-arrow-right"></i>   
          </GameWindowBtn>
        </header>
        
        <div className="game-window">
          <PlayerStats />
          <Board/>
        </div>

        <div className="arrow-keys">
          <div>
            <button 
              onTouchStart={() => dispatch(updateKeyState({ 38: true }))}
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
              onTouchStart={() => dispatch(updateKeyState({ 40: true }))}
              onTouchEnd={() => dispatch(updateKeyState({ 40: false }))}                        
            >
              <i className="fas fa-arrow-down"></i>
            </button>
            <button
              onTouchStart={() => dispatch(updateKeyState( {39: true }))}
              onTouchEnd={() => dispatch(updateKeyState({ 39: false }))}                          
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ mode: state.displayMode }))(GameWindow);