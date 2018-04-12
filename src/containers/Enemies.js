import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeEnemies } from '../actions';
import EntityRenderer from './EntityRenderer';
import EntityCell from '../components/EntityCell';
import Bar from '../components/Bar';
import ENEMIES from '../constants/enemies';

import ghostImg from '../images/enemies/ghost.png';
import iceMonsterImg from '../images/enemies/ice_monster.png';
import orc1Img from '../images/enemies/orc1.png';
import orc2Img from '../images/enemies/orc2.png';
import scorpionImg from '../images/enemies/scorpion.png';
import lavaMonsterImg from '../images/enemies/lava_monster.png';
import bossImg from '../images/enemies/boss.png';
import { rand } from '../util/util';

class Enemies extends Component {
  componentWillReceiveProps(nextProps) {
    if(
      (nextProps.shouldInitialize &&
      nextProps.playerPos.length !== 0) || 
      nextProps.dungeonLevel !== this.props.dungeonLevel
    ) {
      const enemies = this.spawnEnemies(nextProps.rooms, nextProps.playerPos, nextProps.dungeonLevel);
      this.props.dispatch(initializeEnemies(enemies));
    }
  }

  // Spawn 0 - 2 enemies in each room  
  spawnEnemies = (rooms, playerPos, dungeonLevel) => {
    return rooms.reduce((enemies, room, enemyId) => {
      const { coords } = room;
      const [playerX, playerY] = playerPos;

      // Spawn boss at the last level       
      if(dungeonLevel === 5 && enemyId === 0) {
        while(true) {
          const randCoords = coords.splice(rand(0, coords.length - 1), 1)[0]
          const [bossX, bossY] = randCoords;
          if(playerX !== bossX && playerY !== bossY) {
            enemies.push({
              id: "BOSS",
              hp: 400,
              attack: [50, 70],
              level: 10,
              coordinates: randCoords
            })
            break;
          }
        }
      }
      
      for(let i = 0; i < rand(1, 2); i++) {
        const randCoords = coords.splice(rand(0, coords.length - 1), 1)[0]
        const [enemyX, enemyY] = randCoords;

        // Make sure enemy is not spawned on top of player
        if(playerX !== enemyX && playerY !== enemyY) {
          const enemy = {
            id: `${enemyId}${i}`,
            maxHp: ENEMIES[dungeonLevel - 1].level * 10,
            hp: ENEMIES[dungeonLevel - 1].level * 10,
            attack: [ENEMIES[dungeonLevel - 1].level * 3, ENEMIES[dungeonLevel - 1].level * 5],
            level: ENEMIES[dungeonLevel - 1].level,
            coordinates: randCoords
          }
          enemies.push(enemy)
        }
      }

      return enemies;
    }, [])
  }

  determineBackground(dungeonLevel) {
    switch(dungeonLevel) {
      case 1:
        return ghostImg;
      case 2:
        return iceMonsterImg;
      case 3:
        return orc1Img
      case 4:
        return orc2Img
      case 5:
        return scorpionImg
      case 6:
        return lavaMonsterImg;
      default:
        return ghostImg
    }
  }
  
  render() {
    const { enemies, dungeonLevel } = this.props;
    return (
      <ul>
        {
          enemies.map((enemy, i) => {
            const background = enemy.id === 'BOSS' ? `url(${bossImg})` : `url(${this.determineBackground(dungeonLevel)})`
            return (
              <EntityRenderer 
                key={i}
                entityCoords={enemy.coordinates}
              >
                <EntityCell style={{
                  background: `${background} center center`,
                  backgroundSize: "cover",
                  position: "absolute",
                }}>
                  <Bar 
                    val={(enemy.hp / enemy.maxHp) * 100}
                    background="#fff"
                    foreground="#f00"
                    styles={{
                      top: "-5px",
                    }}
                />
                </EntityCell>
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
    enemies: state.enemies.items,
    shouldInitialize: state.enemies.shouldInitialize,
    playerPos: state.player.pos,
    rooms: state.rooms,
    dungeonLevel: state.dungeonLevel
  }
}

export default connect(mapStateToProps)(Enemies);