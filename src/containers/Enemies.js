import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeEnemies } from '../actions';
import EntityRenderer from './EntityRenderer';
import EnemyCell from '../components/EnemyCell';
import { 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS,
} from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { BOARD_SIZE } from '../constants/board';
import ENEMIES from '../constants/enemies';
import { rand } from '../util/util';

class Enemies extends Component {
  componentWillReceiveProps(nextProps) {
    if(
      nextProps.enemies.length === 0 &&
      nextProps.playerPos.length !== 0
    ) {
      const enemies = this.spawnEnemies(nextProps.rooms, nextProps.playerPos);
      this.props.dispatch(initializeEnemies(enemies));
    }
  }

  // Spawn 0 - 2 enemies in each room  
  spawnEnemies = (rooms, playerPos) => {
    return rooms.reduce((enemies, room, enemyId) => {
      const { coords } = room;
      const [playerX, playerY] = playerPos;
      
      for(let i = 0; i < rand(1, 2); i++) {
        const randCoords = coords.splice(rand(0, coords.length - 1), 1)[0]

        // Make sure enemy is not spawned on top of player
        if(playerX !== randCoords[0] && playerY !== randCoords[1]) {
          const enemy = {
            id: `${enemyId}${i}`,
            hp: 5,
            attack: [ENEMIES[0].level * 5, ENEMIES[0].level * 7],
            level: ENEMIES[0].level,
            coordinates: randCoords
          }
          enemies.push(enemy)
        } 
      }

      return enemies;
    }, [])
  }
  
  render() {
    const { enemies, mode, playerPos } = this.props;
    return (
      <ul>
        {
          enemies.map((enemy, i) => {
            return (
              <EntityRenderer 
                key={i}
                entityCoords={enemy.coordinates}
              >
                <EnemyCell />
              </EntityRenderer>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    enemies: state.enemies,
    playerPos: state.player.pos,
    rooms: state.rooms,
    mode: state.displayMode,
  }
}

export default connect(mapStateToProps)(Enemies);