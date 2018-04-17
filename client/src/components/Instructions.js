import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="Instructions">
      <h1>Instructions</h1>
        <ol>
          <li>
            <p>Defeat boss at the 6th dungeon level.</p>
          </li>
          <li>
            <p>Except for the last one, there are stairs in each dungeon.</p>
          </li>
          <li>
            <p>Look for weapons and armors on each dungeon level</p>
          </li>
          <li>
            <p>When you are below 1 hp you die.</p>
          </li>
          <li>
            <p>As you defeat opponents your warrior becomes stronger.</p>
          </li>
          <li>
            <p>Try to beat the game as fast as you can. There is a leaderboard.</p>
          </li>
        </ol>
    </div>
  );
};

export default Instructions;