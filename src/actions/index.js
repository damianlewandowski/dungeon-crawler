export const CLEAR_BOARD = "CLEAR_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_ROOMS = "UPDATE_ROOMS";
export const UPDATE_DUNGEON_LEVEL = "UPDATE_DUNGEON_LEVEL";

export const UPDATE_PLAYER_HP = "UPDATE_PLAYER_HP"
export const UPDATE_PLAYER_MAX_HP = "UPDATE_PLAYER_MAX_HP"
export const UPDATE_PLAYER_LEVEL = "UPDATE_PLAYER_LEVEL"
export const UPDATE_PLAYER_EXP = "UPDATE_PLAYER_EXP"
export const UPDATE_PLAYER_WEAPON = "UPDATE_PLAYER_WEAPON"
export const UPDATE_PLAYER_ARMOR = "UPDATE_PLAYER_ARMOR"
export const UPDATE_PLAYER_POS = "UPDATE_PLAYER_POS";
export const UPDATE_KEY_STATE = "UPDATE_KEY_STATE";
export const KILL_PLAYER = "KILL_PLAYER";
export const UPDATE_NAME = "UPDATE_NAME";

export const TOGGLE_DISPLAY_MODE = "TOGGLE_DISPLAY_MODE";

export const UPDATE_ENEMY_HP = "UPDATE_ENEMY_HP";
export const KILL_ENEMY = "KILL_ENEMY";
export const KILL_BOSS = "KILL_BOSS";
export const UPDATE_ENEMY_LEVEL = "UPDATE_ENEMY_LEVEL";
export const UPDATE_ENEMY_COORDS = "UPDATE_ENEMY_COORDS";
export const INITIALIZE_ENEMIES = "INITIALIZE_ENEMIES";

export const INITIALIZE_POTIONS = "INITIALIZE_POTIONS";
export const DESTROY_POTION = "DESTROY_POTION";

export const UPDATE_GROUND_ARMOR = "UPDATE_GROUND_ARMOR";
export const SHOW_GROUND_ARMOR = "SHOW_GROUND_ARMOR";

export const UPDATE_GROUND_WEAPON = "UPDATE_GROUND_WEAPON";
export const SHOW_GROUND_WEAPON = "SHOW_GROUND_WEAPON";

export const UPDATE_STAIRS = "UPDATE_STAIRS";

export const PLAY_SOUND = "PLAY_SOUND";
export const CHANGE_SOUND = "CHANGE_SOUND";

export const UPDATE_TICKER = "UPDATE_TICKER";

export const clearBoard = () => ({
  type: CLEAR_BOARD,
})

export const updateBoard = board => ({
  type: UPDATE_BOARD,
  payload: board
})

export const updateRooms = rooms => ({
  type: UPDATE_ROOMS,
  payload: rooms
})

export const updatePlayerHp = hp => ({
  type: UPDATE_PLAYER_HP,
  payload: hp
})

export const updatePlayerLevel = level => ({
  type: UPDATE_PLAYER_LEVEL,
  payload: level
})

export const updatePlayerExp = exp => {
  return {
    type: UPDATE_PLAYER_EXP,
    payload: exp
  }
}

export const updatePlayerWeapon = weapon => ({
  type: UPDATE_PLAYER_WEAPON,
  payload: weapon
})

export const updatePlayerArmor = armor => ({
  type: UPDATE_PLAYER_ARMOR,
  payload: armor
})

export const updatePlayerPos = position => ({
  type: UPDATE_PLAYER_POS,
  payload: position
})

export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name,
})

export const updateKeyState = keyState => ({
  type: UPDATE_KEY_STATE,
  payload: keyState,
})

export const killPlayer = () => ({
  type: KILL_PLAYER,
})

export const toggleDisplayMode = () => ({
  type: TOGGLE_DISPLAY_MODE,
})

export const updateEnemyHp = (id, hp) => ({
  type: UPDATE_ENEMY_HP,
  payload: { id, hp },
})

export const killEnemy = id => ({
  type: KILL_ENEMY,
  payload: id
})

export const killBoss = () => ({
  type: KILL_BOSS,
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

export const initializePotions = potions => ({
  type: INITIALIZE_POTIONS,
  payload: potions
})

export const destroyPotion = id => ({
  type: DESTROY_POTION,
  payload: id,
})

export const updateGroundArmor = armor => ({
  type: UPDATE_GROUND_ARMOR,
  payload: armor
})

export const updateGroundWeapon = weapon => ({
  type: UPDATE_GROUND_WEAPON,
  payload: weapon,
})

export const showGroundArmor = show => ({
  type: SHOW_GROUND_ARMOR,
  payload: show,
})

export const showGroundWeapon = show => ({
  type: SHOW_GROUND_WEAPON,
  payload: show,
})

export const updateStairs = coords => ({
  type: UPDATE_STAIRS,
  payload: coords
})

export const playSound = flag => ({
  type: PLAY_SOUND,
  payload: flag,
})

export const changeSound = soundPath => ({
  type: CHANGE_SOUND,
  payload: soundPath
})

export const updateDungeonLevel = () => ({
  type: UPDATE_DUNGEON_LEVEL,
})

export const updateTicker = () => ({
  type: UPDATE_TICKER
})