import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializePotions } from '../actions';
import EntityRenderer from './EntityRenderer';
import PotionCell from '../components/PotionCell';
import { rand } from '../util/util';

class Potions extends Component {
  componentWillReceiveProps(nextProps) {
    if(
      (nextProps.potions.length === 0 &&
      nextProps.enemies.length !== 0 &&
      nextProps.playerPos.length !== 0) || 
      nextProps.dungeonLevel !== this.props.dungeonLevel
    ) {
      const potions = this.spawnPotions(nextProps.rooms, nextProps.playerPos, nextProps.enemies);
      this.props.dispatch(initializePotions(potions));
    }
  }

  // Spawn 0 - 3 potions in each room  
  spawnPotions = (rooms, playerPos, enemies) => {
    return rooms.reduce((potions, room, potionId) => {
      const { coords } = room;
      const { dungeonLevel } = this.props;
      const [playerX, playerY] = playerPos;
      
      for(let i = 0; i < rand(1, 3); i++) {
        const randCoords = coords.splice(rand(0, coords.length - 1), 1)[0]
        const [potionX, potionY] = randCoords;

        // Make sure potion is not spawned on top of player
        if(
          playerX !== potionX && 
          playerY !== potionY 
        ) {
          // Make sure potion is not spawned on top of an enemy
          for(let i = 0; i < enemies.length; i++) {
            const [enemyX, enemyY] = enemies[i].coordinates;
            if(enemyX === potionX && enemyY === potionY) {
              return potions;
            }
          }
          const potion = {
            id: `${potionId}${i}`,
            hp: dungeonLevel * 15,
            coordinates: randCoords
          }
          potions.push(potion)
        } 
      }

      return potions;
    }, [])
  }
  
  render() {
    const { potions } = this.props;
    return (
      <ul>
        {
          potions.map((potion, i) => {
            return (
              <EntityRenderer 
                key={i}
                entityCoords={potion.coordinates}
              >
                <PotionCell />
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
    potions: state.potions,
    enemies: state.enemies.items,
    playerPos: state.player.pos,
    rooms: state.rooms,
    dungeonLevel: state.dungeonLevel,
  }
}

export default connect(mapStateToProps)(Potions);