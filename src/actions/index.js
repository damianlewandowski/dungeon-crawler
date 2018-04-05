export const INITIALIZE_BOARD = "INITIALIZE_BOARD";

export const initializeBoard = (board) => ({
  type: INITIALIZE_BOARD,
  payload: board
})