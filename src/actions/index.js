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
export const KILL_PLAYER = "KILL_PLAYER";

export const CHANGE_DISPLAY_MODE = "CHANGE_DISPLAY_MODE";

export const UPDATE_ENEMY_HP = "UPDATE_ENEMY_HP";
export const KILL_ENEMY = "KILL_ENEMY";
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

export const updatePlayerMaxHp = hp => ({
  type: UPDATE_PLAYER_MAX_HP,
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

export const killPlayer = position => ({
  type: KILL_PLAYER,
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