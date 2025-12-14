import createShip from "./ship";

function createPlayer(name) {
  const carrier = createShip("carrier");
  const battleship = createShip("battleship");
  const destroyer = createShip("destroyer");
  const submarine = createShip("submarine");
  const patrol = createShip("patrol");

  return {
    name: name,
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    patrol: patrol,
    ships: [carrier, battleship, destroyer, submarine, patrol],
  };
}

export default createPlayer;
