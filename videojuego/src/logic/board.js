import { Winner_combos } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  //revisar combinaciones ganadoras
  for (const combo of Winner_combos) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    )
      return boardToCheck[a];
  }
  //si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  /*revisamos si hay empate
    si no hay ams espacios vacios en el tablero */
  return newBoard.every((square) => square != null);
};
