import createGame from "./battleship";

const newGame = createGame();
newGame.player1.autoPlaceShips();
newGame.drawBoards();
