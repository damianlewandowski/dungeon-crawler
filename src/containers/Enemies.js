import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeEnemies } from '../actions';
import EnemyCell from '../components/EnemyCell';
import { 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS,
} from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { BOARD_SIZE } from '../constants/board';
import { rand } from '../util/util';

class Enemies extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.enemies.length === 0) {
      const enemies = this.spawnEnemies(nextProps.rooms);
      this.props.dispatch(initializeEnemies(enemies));
    }
  }

  // Spawn 1 - 2 enemies in each room  
  spawnEnemies = rooms => {
    return rooms.reduce((enemies, room, enemyId) => {
      const { coords } = room;
      for(let i = 0; i < rand(1, 2); i++) {
        const randCoords = coords.splice(rand(0, coords.length - 1), 1)[0]
        const enemy = {
          id: `${enemyId}${i}`,
          hp: 10,
          level: 1,
          coordinates: randCoords
        }
        enemies.push(enemy)
      } 
      return enemies;
    }, [])
  }

  determinePosition(playerX, playerY, enemyX, enemyY) {
    const [rows, cols] = BOARD_SIZE
    const { width, height } = PLAYER_CELL_DIMENSIONS;
    let left = 50 - (playerX - enemyX) * 10;
    let top = 50 - (playerY - enemyY) * 10;
    
    if(playerX < 5) {
      left = (playerX * width) - (playerX - enemyX) * 10;
    } else if(playerX > cols - 5) {
      left = (100 - (cols - playerX) * 10) - (playerX - enemyX) * 10;
    }

    if(playerY < 5) {
      top = (playerY * height) - (playerY - enemyY) * 10;
    } else if(playerY > rows - 5) {
      top = (100 - (rows - playerY) * 10) - (playerY - enemyY) * 10;
    }

    return [left, top];
  }
  
  render() {
    const { enemies, mode, playerPos } = this.props;
    return (
      <ul>
        {
          enemies.map((enemy, i) => {
            const [enemyX, enemyY] = enemy.coordinates;
            if(mode === PLAYER_VIEW_MODE) {
              const [playerX, playerY] = playerPos;

              if(
                enemyX >= playerX - 5 &&
                enemyX <= playerX + 4 &&
                enemyY >= playerY - 5 &&
                enemyY <= playerY + 4
              ) {              
                const [left, top] = this.determinePosition(playerX, playerY, enemyX, enemyY);

                return (
                  <EnemyCell 
                    key={i}
                    posStyle={{
                      left: `${left}%`,
                      top: `${top}%`,
                      width: `${PLAYER_CELL_DIMENSIONS.width}%`,
                      height: `${PLAYER_CELL_DIMENSIONS.height}%`,
                    }}
                  />
                )
              }
              // Don't render anything
              return null;
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