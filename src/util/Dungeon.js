import { rand } from './util';
import { WALL, ROOM, BORDER } from '../constants/boardCell';

const DIRECTIONS = ["top", "right", "bottom", "left"]

export default class Dungeon {
  constructor(rows, cols, roomsLimit) {
    this.rows = rows;
    this.cols = cols;
    this.roomsLimit = roomsLimit;
    this.rooms = [];
  }

  getRooms() {
    if(this.rooms.length === 0) {
      console.log("You must first generate rooms.");
      return null;
    }
    return this.rooms;
  }

  // Creates brand new 2d array and fills it with walls
  initializeBoard = () => {
    const { rows, cols } = this;
    const board = Array(rows).fill().map(() => Array(cols).fill(WALL))
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        if(
          i === 0 ||
          j === 0 ||
          i === rows - 1 ||
          j === cols - 1 
        ) {
          board[i][j] = BORDER;
        }
      }
    }
    return board;
  }

  canRoomBeBuilt = (board, x, y, width, height) => {
    for(let i = y; i < y + height; i++) {
      for(let j = x; j < x + width; j++) {
        // Make sure rooms are not touching each other
        if(
          i === 0 || j === 0 ||
          (board[i] && board[i][j] && board[i][j] !== WALL) ||
          (board[i] && board[i][j - 1] && board[i][j - 1] !== WALL) ||
          (board[i] && board[i][j + 1] && board[i][j + 1] !== WALL) ||
          (board[i - 1] && board[i - 1][j] !== WALL) ||
          (board[i + 1] && board[i + 1][j] !== WALL) ||
          (board[i - 1] && board[i - 1][j - 1] && board[i - 1][j - 1] !== WALL) ||
          (board[i - 1] && board[i - 1][j + 1] && board[i - 1][j + 1] !== WALL) ||
          (board[i + 1] && board[i + 1][j - 1] && board[i + 1][j - 1] !== WALL) ||
          (board[i + 1] && board[i + 1][j + 1] && board[i + 1][j + 1] !== WALL) 
        ) {
          return false;
        }
      }
    }

    return true;
  }

  // Impure, mutates board array
  buildRoom = (board, x, y, width, height) => {
    const room = {
      // For spawning something in every room
      coords: [],           
      // For connecting to other rooms
      topCoords: [],   
      rightCoords: [],    
      bottomCoords: [],   
      leftCoords: [], 
    };
    for(let i = y; i < y + height; i++) {
      for(let j = x; j < x + width; j++) {
        board[i][j] = ROOM;
        room.coords.push([j, i])
        if(i === y) {
          room.topCoords.push([j, i])
        }
        if(j === x) {
          room.leftCoords.push([j, i])
        }
        if(i === y + height - 1) {
          room.bottomCoords.push([j, i])
        }
        if(j === x + width - 1) {
          room.rightCoords.push([j, i])
        }
      }
    }
    return room;
  }

  // Get coords next to the room object
  getRandCoordsFromDir = (dir, room, width, height) => {
    switch(dir) {
      case 'top':
        return {
          x: rand(room.leftCoords[0][0] , room.rightCoords[0][0]),
          y: room.topCoords[0][1] - height - 1
        }
      case 'bottom':
        return {
          x: rand(room.leftCoords[0][0], room.rightCoords[0][0]),
          y: room.bottomCoords[0][1] + 2
        }
      case 'left':
        return {
          x: room.leftCoords[0][0] - width - 1,
          y: rand(room.topCoords[0][1], room.bottomCoords[0][1])
        }
      case 'right':
        return {
          x: room.rightCoords[0][0] + 2,
          y: rand(room.topCoords[0][1], room.bottomCoords[0][1])
        }
      default:
        console.log("Something went wrong.");
        return {
          x: 0,
          y: 0
        }
    }
  }

  bridge(board, width, height, x, y, dir) {
    switch(dir) {
      case "top":
        board[y + height][x] = ROOM;
        break;
      case "right":
        board[y][x - 1] = ROOM;
        break;
      case "bottom":
        board[y - 1][x] = ROOM;
        break;
      case "left":
        board[y][x + width] = ROOM;
        break;
      default:
        console.log("Something went wrong.");
    }
  }

  // Carves rooms inside the board's walls
  generateRooms = board => {
    const boardCopy = board.map(row => row.slice());

    // Carve first room and create next one based on first ones' position
    const width = rand(5, 12);
    const height = rand(5, 12);
    const x = rand(0, boardCopy[0].length - width);
    const y = rand(0, boardCopy.length - height);
    this.rooms.push(
      this.buildRoom(
        boardCopy,
        x,
        y,
        width,
        height
      )
    )

    for(let i = 0; i < this.roomsLimit; i++) {
      const width = rand(5, 12);
      const height = rand(5, 12);

      //Keep trying to place room in the board next to another one
      for(let i = 0; i < 1000; i++) {
        // Pick random room and try to carve a room next to it
        const randRoom = this.rooms[rand(0, this.rooms.length - 1)]

        // Randomly pick direction from which start building room
        const randDir = DIRECTIONS[rand(0, DIRECTIONS.length - 1)];
        const { x, y } = this.getRandCoordsFromDir(randDir, randRoom, width, height);
        if(this.canRoomBeBuilt(boardCopy, x, y, width, height)) {
          this.rooms.push(this.buildRoom(boardCopy, x, y, width, height));
          this.bridge(boardCopy, width, height, x, y, randDir);
          break;
        }
      }
    }

    return boardCopy;
  }
}