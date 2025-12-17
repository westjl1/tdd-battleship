import createPlayer from "./player";

function createGame() {
  const player1 = createPlayer("John", "human");
  const player2 = createPlayer("Computer", "computer");

  const drawBoards = () => {
    const player1BoardDiv = document.getElementById("player1Board");
    const player2BoardDiv = document.getElementById("player2Board");

    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        nextCellDiv = document.createElement("div");
        nextCellDiv.classList.add("cell");
        nextCellDiv.dataset.x = i;
        nextCellDiv.dataset.y = j;
        player1BoardDiv.appendChild(nextCellDiv);
        player2BoardDiv.appendChild(nextCellDiv);
      }
    }
  };

  return {
    player1,
    player2,
    drawBoards,
  };
}

export default createGame;
