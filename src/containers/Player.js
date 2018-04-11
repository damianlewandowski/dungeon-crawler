import React, { Component } from 'react';
import PlayerCell from '../components/PlayerCell';
import { connect } from 'react-redux';
import { 
  updatePlayerPos,
  updatePlayerHp,
  updatePlayerExp,
  updatePlayerLevel,
  updatePlayerWeapon,
  updatePlayerArmor,
  updateEnemyHp,
  killEnemy,
  destroyPotion,
  playSound,
  changeSound,
  showGroundArmor,
  showGroundWeapon
} from '../actions';
import { BOARD_SIZE } from '../constants/board';
import { 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS,
  WALL 
} from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import ARMORS from '../constants/armors';
import WEAPONS from '../constants/weapons';
import drinkPotionSound from '../sounds/drink_potion.mp3';
import burpSound from '../sounds/burp.mp3';
import { rand } from '../util/util';

class Player extends Component {
  componentDidMount() {
    document.addEventListener("keydown", e => {
      const { playerPos, dispatch } = this.props;
      const [x, y] = playerPos;

      switch(e.keyCode) {
        case 37:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x - 1, y])
            )
          }      
          e.preventDefault();
          break;
        case 38:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x, y - 1])
            )
          }   
          e.preventDefault()
          break;
        case 39:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x + 1, y])
            )
          }
          e.preventDefault();
          break;
        case 40:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x, y + 1])
            )
          }
          e.preventDefault()
          break;
        default:
          break;
      }
    })
  }

  checkWall(dir, col, row) {
    const { board } = this.props;    
    switch(dir) {
      case 37:
        if(board[row][col - 1] === WALL) {
          return false;
        } 
        return true;
      case 38:
        if(board[row - 1][col] === WALL) {
          return false;
        } 
        return true;
      case 39:
        if(board[row][col + 1] === WALL) {
          return false;
        } 
        return true;
      case 40:
        if(board[row + 1][col] === WALL) {
          return false;
        } 
        return true;
      default:
        break;
    }
  }

  checkForEntity(dir, entity, playerCol, playerRow) {
    const [entityCol, entityRow] = entity.coordinates;
    
    switch(dir) {
      case 37:
        if(
          playerRow === entityRow &&
          playerCol - 1 === entityCol
        ) {
          return entity.id;
        }
        break;
      case 38:
        if(
          playerRow - 1 === entityRow &&
          playerCol === entityCol
        ) {
          return entity.id;
        }
        break;
      case 39:
        if(
          playerRow === entityRow &&
          playerCol + 1 === entityCol
        ) {
          return entity.id;
        }
        break;
      case 40:
        if(
          playerRow + 1 === entityRow &&
          playerCol === entityCol
        ) {
          return entity.id;
        }
        break;
      default:
        break;
    }

    // Nothing is here
    return false;
  }

  checkForEntities(dir, entities, playerCol, playerRow) {
    for(let i = 0; i < entities.length; i++) {
      const entity = entities[i];

      const somethingThere = this.checkForEntity(dir, entity, playerCol, playerRow)
      if(somethingThere) {
        return somethingThere
      }
    }

    return false;
  }

  fightEnemy = (enemyId) => {
    const { 
      enemies, 
      dispatch, 
      weapon, 
      playerHp, 
      playerLevel,
      playerExp,
    } = this.props;
    const enemy = enemies.find(enemy => enemy.id === enemyId)
    const newPlayerHp = playerHp - enemy.attack[rand(0, 1)];    
    const newEnemyHp = enemy.hp - weapon.damage * playerLevel;    
    const newPlayerExp = playerExp + enemy.level * 10
    
    // Decide randomly who attacks first
    const turn = rand(1, 2);
    // Player attacks first
    if(turn === 1) {
      // Check if enemy was killed
      if(newEnemyHp < 1) {
        dispatch(killEnemy(enemyId));      
        dispatch(updatePlayerExp(newPlayerExp))            
      } else {
        dispatch(updateEnemyHp(enemyId, newEnemyHp))
        dispatch(updatePlayerHp(newPlayerHp));
      }
    // Enemy atacks first
    } else {
      dispatch(updateEnemyHp(enemyId, newEnemyHp))
      dispatch(updatePlayerHp(newPlayerHp));
      if(newEnemyHp < 1) {
        dispatch(updatePlayerExp(newPlayerExp))    
        dispatch(killEnemy(enemyId))
      }
    }

    if(newPlayerExp > 99) {
      dispatch(updatePlayerLevel(playerLevel + 1))
      dispatch(updatePlayerExp(0))      
    }

    if(newPlayerHp < 1) {
      alert("You dead :(")
    } 
  }

  drinkPotion(potionId) {
    const { playerHp, potions, dispatch } = this.props;
    const potion = potions.find(pot => pot.id === potionId)    
    const hpFromPotion = potion.hp;
    dispatch(changeSound(drinkPotionSound))
    dispatch(playSound(true))

    // 20% for making a burp
    if(rand(1, 5) === 2) {
      setTimeout(() => {
        dispatch(changeSound(burpSound))
        dispatch(playSound(true))
      }, 1500)
    }
    
    dispatch(updatePlayerHp(playerHp + hpFromPotion))
    dispatch(destroyPotion(potionId));
  }

  equipArmor(id) {
    this.props.dispatch(updatePlayerArmor(ARMORS[id]))
    this.props.dispatch(showGroundArmor(false))    
  }

  equipWeapon(id) {
    this.props.dispatch(updatePlayerWeapon(WEAPONS[id]))
    this.props.dispatch(showGroundWeapon(false))    
  }

  canMove = dir => {
    const [col, row] = this.props.playerPos
    const { enemies, potions, groundArmor, groundWeapon } = this.props;

    const isWallThere = this.checkWall(dir, col, row);
    const enemyId = this.checkForEntities(dir, enemies, col, row)
    const potionId = this.checkForEntities(dir, potions, col, row);
    const groundArmorId = this.checkForEntity(dir, groundArmor, col, row);
    const groundWeaponId = this.checkForEntity(dir, groundWeapon, col, row);
    if(enemyId) {
      this.fightEnemy(enemyId, enemies);
    }

    if(potionId) {
      this.drinkPotion(potionId)
    }

    if(groundArmorId) {
      this.equipArmor(groundArmorId);
    }

    if(groundWeaponId) {
      this.equipWeapon(groundWeaponId);
    }

    return isWallThere && !enemyId;
  }

  calculateDisplayedPos = (mode) => {
    const [x, y] = this.props.playerPos;
    const { width, height } = PLAYER_CELL_DIMENSIONS

    if(mode === PLAYER_VIEW_MODE) {
      const [rows, cols] = BOARD_SIZE;
      let left = 50;
      let top = 50;

      if(x < 5) {
        left = x * width;
      } else if(x > cols - 5) {
        left = 100 - (cols - x) * 10;
      }

      if(y < 5) {
        top = y * height;
      } else if(y > rows - 5) {
        top = 100 - (rows - y) * 10;
      }

      return [left, top]
    }

    return [
      x * DUNGEON_CELL_DIMENSIONS.width,
      y * DUNGEON_CELL_DIMENSIONS.height
    ]
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.playerPos.length === 0) {
      const { rooms } = nextProps;
      const room = rooms[rand(0, rooms.length - 1)];
      const randCoords = room.coords[rand(0, room.coords.length - 1)];
      this.props.dispatch(updatePlayerPos(randCoords))
    }
  }

  render() {
    const { mode } = this.props;
    const [left, top] = this.calculateDisplayedPos(mode)

    return (
      <div>
        <PlayerCell
          mode={mode} 
          positionStyles={{
          left: `${left}%`,
          top: `${top}%`,
          }} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  board: state.board,
  playerPos: state.player.pos,
  weapon: state.player.weapon,
  armor: state.player.armor,
  playerLevel: state.player.level,
  playerHp: state.player.hp,
  playerExp: state.player.exp,
  mode: state.displayMode,
  enemies: state.enemies,
  potions: state.potions,
  groundArmor: state.groundArmor.armor,
  groundWeapon: state.groundWeapon.weapon,
})

export default connect(mapStateToProps)(Player);