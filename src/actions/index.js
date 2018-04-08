export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_ROOMS = "UPDATE_ROOMS";
export const UPDATE_PLAYER_POS = "UPDATE_PLAYER_POS";
export const CHANGE_DISPLAY_MODE = "CHANGE_DISPLAY_MODE";
export const UPDATE_ENEMIES = "UPDATE_ENEMIES";

export const updateBoard = board => ({
  type: UPDATE_BOARD,
  payload: board
})

export const updateRooms = rooms => ({
  type: UPDATE_ROOMS,
  payload: rooms
})

export const updatePlayerPos = position => ({
  type: UPDATE_PLAYER_POS,
  payload: position
})

export const changeDisplayMode = mode => ({
  type: CHANGE_DISPLAY_MODE,
  payload: mode
})

export const updateEnemies = enemies => ({
  type: UPDATE_ENEMIES,
  payload: enemies,
})