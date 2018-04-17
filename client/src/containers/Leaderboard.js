import React, { Component } from 'react';
import './Leaderboard.css';

class Leaderboard extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    fetch("https://dungeon-crawler-api.herokuapp.com/leaderboard")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
  }

  render() {
    const playersItems = this.state.players.map((player, i) => (
      <tr key={i}>
        <td>{player.name}</td>
        <td>{player.level}</td>
        <td>{player.weapon}</td>
        <td>{player.armor}</td>
        <td>{player.time}</td>
      </tr>
    ))

    return (
      <div className='Leaderboard'>
        <h1>LEADERBOARD</h1>
        <table className="Leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Weapon</th>
              <th>Armor</th>
              <th>Time</th>
            </tr>
          </thead>
          
          <tbody>
            {playersItems}
          </tbody>
          
        </table>
      </div>
    )
  }
}

export default Leaderboard;