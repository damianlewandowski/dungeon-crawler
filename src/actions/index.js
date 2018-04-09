export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_ROOMS = "UPDATE_ROOMS";

export const UPDATE_PLAYER_HP = "UPDATE_PLAYER_HP"
export const UPDATE_PLAYER_POS = "UPDATE_PLAYER_POS";

export const CHANGE_DISPLAY_MODE = "CHANGE_DISPLAY_MODE";

export const UPDATE_ENEMY_HP = "UPDATE_ENEMY_HP";
export const KILL_ENEMY = "KILL_ENEMY";
export const UPDATE_ENEMY_LEVEL = "UPDATE_ENEMY_LEVEL";
export const UPDATE_ENEMY_COORDS = "UPDATE_ENEMY_COORDS";
export const INITIALIZE_ENEMIES = "INITIALIZE_ENEMIES";

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

export const updateEnemyHp = (id, hp) => ({
  type: UPDATE_ENEMY_HP,
  payload: { id, hp },
})

export const killEnemy = id => ({
  type: KILL_ENEMY,
  payload: id
})

export const updateEnemyLevel = lvl => ({
  type: UPDATE_ENEMY_LEVEL,
  payload: lvl,
})

export const updateEnemyCoords = coords => ({
  type: UPDATE_ENEMY_COORDS,
  payload: coords,
})

export const initializeEnemies = enemies => ({
  type: INITIALIZE_ENEMIES,
  payload: enemies,
})

export const updatePlayerHp = hp => ({
  type: UPDATE_PLAYER_HP,
  payload: hp
})