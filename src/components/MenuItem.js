import React, { Component } from 'react';
import flame from '../images/flame.gif';
import './MenuItem.css';

class MenuItem extends Component {
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
    const { text } = this.props;
    const { showFlames } = this.state;
    const { toggleFlames } = this;
    return (
      <li className="MenuItem">
        {showFlames ? <img width="15" src={flame} alt="flame"/> : null}
          <span
            onMouseEnter={toggleFlames}
            onMouseLeave={toggleFlames}
          >
            {text}
          </span>
        {showFlames ? <img width="15" src={flame} alt="flame"/> : null}
      </li>
    )
  }
}

export default MenuItem;