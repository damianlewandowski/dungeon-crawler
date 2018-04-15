import React, { Component } from 'react';
import flame from '../images/flame.gif';
import { Link } from 'react-router-dom';

import './MenuLink.css';

class MenuLink extends Component {
  state = {
    showFlames: false,
  }

  toggleFlames = () => {
    this.setState(
      prevState => ({
        showFlames: !prevState.showFlames,
      })
    )
  }

  determineModal(text) {
    if(text === "instructions") {
      return { instructionsModal: true }
    } else if(text === "leaderboard") {
      return { leaderboardModal: true }
    }
    return null;
  }

  render() {
    const { text, to } = this.props;
    const { showFlames } = this.state;
    const { toggleFlames } = this;
    const toObj = {
      pathname: to,
      state: this.determineModal(text)
    }

    return (
      <li className="MenuLink">
        {showFlames ? <img width="15" src={flame} alt="flame"/> : null}
          
          <Link
            to={toObj}
            onMouseEnter={toggleFlames}
            onMouseLeave={toggleFlames}
          >
            {text}
          </Link>
        {showFlames ? <img width="15" src={flame} alt="flame"/> : null}
      </li>
    )
  }
}

export default MenuLink;