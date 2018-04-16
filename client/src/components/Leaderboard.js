import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ match }) => {
  return (
    <div className='Leaderboard'>
      <h1>LEADERBOARD</h1>
      <table>
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
          <tr>
            <td>Damian</td>
            <td>21</td>
            <td>Daedric Sword</td>
            <td>Daedric Armor</td>
            <td>00:12:54</td>
          </tr>
        </tbody>
        
      </table>
    </div>
  );
};

export default Leaderboard;