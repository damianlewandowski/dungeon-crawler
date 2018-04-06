export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_ROOMS = "UPDATE_ROOMS";

export const updateBoard = board => ({
  type: UPDATE_BOARD,
  payload: board
})

export const updateRooms = rooms => ({
  type: UPDATE_ROOMS,
  payload: rooms
})