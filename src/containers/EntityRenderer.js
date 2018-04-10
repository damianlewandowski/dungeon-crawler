import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS,
} from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { BOARD_SIZE } from '../constants/board';

class EntityRenderer extends Component {
  determinePosition(playerX, playerY, entityX, entityY) {
    const [rows, cols] = BOARD_SIZE
    const { width, height } = PLAYER_CELL_DIMENSIONS;
    let left = 50 - (playerX - entityX) * 10;
    let top = 50 - (playerY - entityY) * 10;
    
    if(playerX < 5) {
      left = (playerX * width) - (playerX - entityX) * 10;
    } else if(playerX > cols - 5) {
      left = (100 - (cols - playerX) * 10) - (playerX - entityX) * 10;
    }

    if(playerY < 5) {
      top = (playerY * height) - (playerY - entityY) * 10;
    } else if(playerY > rows - 5) {
      top = (100 - (rows - playerY) * 10) - (playerY - entityY) * 10;
    }

    return [left, top];
  }

  determineRenderedCells = () => {
    const { entityCoords, mode, playerPos } = this.props;
    const [entityX, entityY] = entityCoords;
    if(mode === PLAYER_VIEW_MODE) {
      const [playerX, playerY] = playerPos;

      if(
        entityX >= playerX - 5 &&
        entityX <= playerX + 4 &&
        entityY >= playerY - 5 &&
        entityY <= playerY + 4
      ) {              
        const [left, top] = this.determinePosition(playerX, playerY, entityX, entityY);

        return {
          left: `${left}%`,
          top: `${top}%`,
          width: `${PLAYER_CELL_DIMENSIONS.width}%`,
          height: `${PLAYER_CELL_DIMENSIONS.height}%`,
        }
      } 
    } else {
      return {
        left: `${entityX * DUNGEON_CELL_DIMENSIONS.width}%`,
        top: `${entityY * DUNGEON_CELL_DIMENSIONS.height}%`,
        width: `${DUNGEON_CELL_DIMENSIONS.width}%`,
        height: `${DUNGEON_CELL_DIMENSIONS.height}%`
      }
    }
  }
  
  render() {
    const styles = this.determineRenderedCells();
    const entityToRender = React.Children.map(this.props.children, child => React.cloneElement(child, {
      posStyle: {...this.props.style, ...styles }
    }))
    
    return entityToRender;
  } 
}

const mapStateToProps = state => {
  return {
    playerPos: state.player.pos,
    rooms: state.rooms,
    mode: state.displayMode,
  }
}

export default connect(mapStateToProps)(EntityRenderer);