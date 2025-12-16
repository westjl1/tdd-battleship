import createPlayer from "./player";

function createGame() {
  const player1 = createPlayer("John", "human");
  const player2 = createPlayer("Computer", "computer");

  return {
    player1,
    player2,
  };
}

export default createGame;
