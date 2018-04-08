import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEnemies } from '../actions';
import EnemyCell from '../components/EnemyCell';
import { 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS,
} from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { rand } from '../util/util';

class Enemies extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.enemies.length === 0) {
      const enemies = this.spawnEnemies(nextProps.rooms);
      this.props.dispatch(updateEnemies(enemies));
    }
  }

  // Spawn 1 - 2 enemies in each room  
  spawnEnemies = rooms => {
    return rooms.reduce((enemies, room) => {
      const { coords } = room;
      for(let i = 0; i < rand(1, 2); i++) {
        enemies.push(coords[rand(0, coords.length - 1)]);
      } 
      return enemies;
    }, [])
  }
  
  render() {
    const { enemies, mode, playerPos } = this.props;

    return (
      <ul>
        {
          enemies.map((coords, i) => {
            const [enemyX, enemyY] = coords;
            
            if(mode === PLAYER_VIEW_MODE) {
              const [playerX, playerY] = playerPos;
              if(
                enemyX >= playerX - 5 &&
                enemyX <= playerX + 4 &&
                enemyY >= playerY - 5 &&
                enemyY <= playerY + 4
              ) {
                console.log(PLAYER_CELL_DIMENSIONS.width);
                console.log(Math.abs(playerY - enemyY) * 10);
                return (
                  <EnemyCell 
                    key={i}
                    posStyle={{
                      left: `${50 - (playerX - enemyX) * 10}%`,
                      top: `${50 - (playerY - enemyY) * 10}%`,
                      width: `${PLAYER_CELL_DIMENSIONS.width}%`,
                      height: `${PLAYER_CELL_DIMENSIONS.height}%`,
                    }}
                  />
                )
              }    
            } else {
                return (
                  <EnemyCell 
                    key={i}
                    posStyle={{
                      left: `${enemyX * DUNGEON_CELL_DIMENSIONS.width}%`,
                      top: `${enemyY * DUNGEON_CELL_DIMENSIONS.height}%`,
                      width: `${DUNGEON_CELL_DIMENSIONS.width}%`,
                      height: `${DUNGEON_CELL_DIMENSIONS.height}%`
                    }}
                  />
                )
              } 
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    enemies: state.enemies,
    playerPos: state.playerPos,
    rooms: state.rooms,
    mode: state.displayMode,
  }
}

export default connect(mapStateToProps)(Enemies);