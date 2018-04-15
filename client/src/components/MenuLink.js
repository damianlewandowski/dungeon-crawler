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

  render() {
    const { text, to } = this.props;
    const { showFlames } = this.state;
    const { toggleFlames } = this;
    
    return (
      <li className="MenuLink">
        {showFlames ? <img width="15" src={flame} alt="flame"/> : null}
          
          <Link
            to={{
              pathname: to,
              state: to === "instructions" ? { modal: true } : null
            }}
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