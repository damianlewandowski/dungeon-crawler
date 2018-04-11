import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGroundArmor } from '../actions';
import EntityRenderer from './EntityRenderer';
import ArmorCell from '../components/ArmorCell';
import ARMORS from '../constants/armors';
import { rand } from '../util/util';

import cleanDiaperImg from '../images/armors/clean_diaper.png';
import shirtImg from '../images/armors/shirt.png';
import winterCoatImg from '../images/armors/winter_coat.png';
import chainMailImg from '../images/armors/chain_mail.png';
import fullPlateArmorImg from '../images/armors/full_plate_armor.png';

const ARMOR_IMAGES = [
  cleanDiaperImg,
  shirtImg,
  winterCoatImg,
  chainMailImg,
  fullPlateArmorImg
]

class Armor extends Component {
  componentWillReceiveProps(nextProps) {
    if(
      nextProps.potions.length !== 0 &&
      nextProps.enemies.length !== 0 &&
      nextProps.playerPos.length !== 0 &&
      Object.keys(nextProps.groundArmor.armor).length === 0
    ) {
      const armor = this.spawnArmor(
        nextProps.rooms, 
        nextProps.playerPos, 
        nextProps.enemies, 
        nextProps.potions,
        nextProps.dungeonLevel
      );
      this.props.dispatch(updateGroundArmor(armor));
    }
  }

  spawnArmor = (rooms, playerPos, enemies, potions, dungeonLevel) => {
    const [playerX, playerY] = playerPos;
    while(true) {
      const room = rooms[rand(0, rooms.length - 1)];
      const { coords } = room;
      const randCoords = coords[rand(0, coords.length - 1)];
      const [armorX, armorY] = randCoords;

      if(playerX !== armorX && playerY !== armorY) {
        // Make sure armor is not spawned on top of an enemy
        for(let i = 0; i < enemies.length; i++) {
          const [enemyX, enemyY] = enemies[i].coordinates;
          if(enemyX === armorX && enemyY === armorY) {
            continue;
          }
        }
        // Make sure armor is not spawned on top of a potion
        for(let i = 0; i < potions.length; i++) {
          const [potionX, potionY] = potions[i].coordinates;
          if(armorX === potionX && armorY === potionY) {
            continue;
          }
        }

        return {
          ...ARMORS[dungeonLevel],
          coordinates: randCoords
        }
      }
    }
  }
  
  render() {
    const { groundArmor } = this.props;
    console.log(groundArmor);
    const isEmpty = Object.keys(groundArmor.armor).length === 0;
    console.log(isEmpty);
    return !isEmpty && groundArmor.show 
    ? (
      <EntityRenderer 
        entityCoords={groundArmor.armor.coordinates}
      >
        <ArmorCell style={{
          background: `url(${ARMOR_IMAGES[groundArmor.armor.id]})`,
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
  }
}

export default connect(mapStateToProps)(Armor);