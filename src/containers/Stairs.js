import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStairs } from '../actions';
import EntityRenderer from './EntityRenderer';
import EntityCell from '../components/EntityCell';
import { rand } from '../util/util';
import stairsImg from '../images/stairs.png';

class Stairs extends Component {
  componentWillReceiveProps(nextProps) {
    if(
      (nextProps.potions.length !== 0 &&
      nextProps.enemies.length !== 0 &&
      nextProps.playerPos.length !== 0 &&
      Object.keys(nextProps.groundArmor.armor).length !== 0 &&
      Object.keys(nextProps.groundWeapon.weapon).length !== 0 &&
      nextProps.stairs.show) ||
      nextProps.dungeonLevel !== this.props.dungeonLevel
    ) {
      if(nextProps.dungeonLevel === 6) {
        // Do not create stairs on the last dungeon level
        const stairs = []
        this.props.dispatch(updateStairs(stairs));
      } else {
        const stairs = this.spawnStairs(
          nextProps.rooms, 
          nextProps.playerPos, 
          nextProps.enemies, 
          nextProps.potions,
          nextProps.dungeonLevel,
          nextProps.groundArmor.armor,
          nextProps.groundWeapon,
        );
        this.props.dispatch(updateStairs(stairs));
      }
      
    }
  }

  spawnStairs = (
    rooms, 
    playerPos, 
    enemies, 
    potions, 
    dungeonLevel, 
    groundArmor,
    groundWeapon,
  ) => {
    const [playerX, playerY] = playerPos;
    const [armorX, armorY] = groundArmor.coordinates;
    const [weaponX, weaponY] = groundArmor.coordinates;
    while(true) {
      const room = rooms[rand(0, rooms.length - 1)];
      const { coords } = room;
      const randCoords = coords[rand(0, coords.length - 1)];
      const [stairsX, stairsY] = randCoords;

      if(playerX !== stairsX && playerY !== stairsY) {
        // Make sure stars are not spawned on top of an enemy
        for(let i = 0; i < enemies.length; i++) {
          const [enemyX, enemyY] = enemies[i].coordinates;
          if(enemyX === stairsX && enemyY === stairsY) {
            continue;
          }
        }
        // Make sure stairs are not spawned on top of a potion
        for(let i = 0; i < potions.length; i++) {
          const [potionX, potionY] = potions[i].coordinates;
          if(stairsX === potionX && stairsY === potionY) {
            continue;
          }
        }
        // Make sure stairs are not spawned on top of an armor
        if(stairsX === armorX && stairsY === armorY) {
          continue;
        }
        // No weapon on top of stairs
        if(stairsX === weaponX && stairsY === weaponY) {
          continue;
        }
        return randCoords
      }
    }
  }
  
  render() {
    const { stairs } = this.props;
    
    return (
      <EntityRenderer 
        entityCoords={stairs.coordinates}
      >
        <EntityCell style={{
          background: `url(${stairsImg}) center center`,
          backgroundSize: "cover",
          position: "absolute",
        }} 
        />
      </EntityRenderer> 
    )
  }
}

const mapStateToProps = state => {
  return {
    potions: state.potions,
    enemies: state.enemies.items,
    playerPos: state.player.pos,
    rooms: state.rooms,
    dungeonLevel: state.dungeonLevel,
    groundArmor: state.groundArmor,
    groundWeapon: state.groundWeapon,
    stairs: state.stairs,
  }
}

export default connect(mapStateToProps)(Stairs);