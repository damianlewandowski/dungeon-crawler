import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGroundWeapon } from '../actions';
import EntityRenderer from './EntityRenderer';
import WeaponCell from '../components/WeaponCell';
import WEAPONS from '../constants/weapons';
import { rand } from '../util/util';

import stick from '../images/weapons/stick.png';
import club from '../images/weapons/club.png';
import shortSword from '../images/weapons/short_sword.png';
import longSword from '../images/weapons/long_sword.png';
import fireSword from '../images/weapons/fire_sword.png';

const WEAPON_IMAGES = [
  stick,
  club,
  shortSword,
  longSword,
  fireSword
]

class Weapon extends Component {
  componentWillReceiveProps(nextProps) {
    if(
      nextProps.potions.length !== 0 &&
      nextProps.enemies.length !== 0 &&
      nextProps.playerPos.length !== 0 &&
      Object.keys(nextProps.groundArmor.armor).length !== 0 &&
      Object.keys(nextProps.groundWeapon.weapon).length === 0
    ) {
      const weapon = this.spawnWeapon(
        nextProps.rooms, 
        nextProps.playerPos, 
        nextProps.enemies, 
        nextProps.potions,
        nextProps.dungeonLevel,
        nextProps.groundArmor.armor,
      );
      this.props.dispatch(updateGroundWeapon(weapon));
    }
  }

  spawnWeapon = (rooms, playerPos, enemies, potions, dungeonLevel, groundArmor) => {
    const [playerX, playerY] = playerPos;
    const [armorX, armorY] = groundArmor.coordinates;
    while(true) {
      const room = rooms[rand(0, rooms.length - 1)];
      const { coords } = room;
      const randCoords = coords[rand(0, coords.length - 1)];
      const [weaponX, weaponY] = randCoords;

      if(playerX !== weaponX && playerY !== weaponY) {
        // Make sure weapon is not spawned on top of an enemy
        for(let i = 0; i < enemies.length; i++) {
          const [enemyX, enemyY] = enemies[i].coordinates;
          if(enemyX === weaponX && enemyY === weaponY) {
            continue;
          }
        }
        // Make sure weapon is not spawned on top of a potion
        for(let i = 0; i < potions.length; i++) {
          const [potionX, potionY] = potions[i].coordinates;
          if(weaponX === potionX && weaponY === potionY) {
            continue;
          }
        }
        // Make sure weapon is not spawned on top of an armor
        if(weaponX === armorX && weaponY === armorY) {
          continue;
        }
        return {
          ...WEAPONS[dungeonLevel],
          coordinates: randCoords
        }
      }
    }
  }
  
  render() {
    const { groundWeapon } = this.props;
    const isEmpty = Object.keys(groundWeapon.weapon).length === 0;
    return !isEmpty && groundWeapon.show 
    ? (
      <EntityRenderer 
        entityCoords={groundWeapon.weapon.coordinates}
      >
        <WeaponCell style={{
          background: `url(${WEAPON_IMAGES[groundWeapon.weapon.id]})`,
          backgroundSize: "cover",
          position: "absolute",
        }} />
      </EntityRenderer>  
    )
    : null
  }
}

const mapStateToProps = state => {
  return {
    potions: state.potions,
    enemies: state.enemies,
    playerPos: state.player.pos,
    rooms: state.rooms,
    dungeonLevel: state.dungeonLevel,
    groundArmor: state.groundArmor,
    groundWeapon: state.groundWeapon,
  }
}

export default connect(mapStateToProps)(Weapon);