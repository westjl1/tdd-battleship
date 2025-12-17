import createShip from "./ship";

function createPlayer(name, type = "human") {
  const carrier = createShip("carrier");
  const battleship = createShip("battleship");
  const destroyer = createShip("destroyer");
  const submarine = createShip("submarine");
  const patrol = createShip("patrol");
  const ships = [carrier, battleship, destroyer, submarine, patrol];

  const autoPlaceShips = () => {
    ships.forEach((ship) => {
      let possibleStartsSetHorizontal = new Set();
      let possibleStartsSetVirtical = new Set();

      let possibleStartsArrayHorizontal = [];
      let possibleStartsArrayVirtical = [];

      for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
          let endX = x + ship.getLength();
          let endY = y + ship.getLength();

          //Look for horizontal spots
          if (endX <= 9) {
            let blocker = false;
            for (let i = x; i <= endX; i++) {
              if (takenSpots(ships).has(`[${i},${y}]`)) {
                blocker = true;
              }
            }
            if (
              !blocker &&
              !possibleStartsSetHorizontal.has(JSON.stringify([x, y])) &&
              !possibleStartsSetVirtical.has(JSON.stringify([x, y]))
            ) {
              possibleStartsSetHorizontal.add(JSON.stringify([x, y]));
              possibleStartsArrayHorizontal.push([x, y]);
            }
          }

          //Look for virticle spots
          if (endY <= 9) {
            let blocker = false;
            for (let i = y; i <= endY; i++) {
              if (takenSpots(ships).has(`[${x},${i}]`)) {
                blocker = true;
              }
            }
            if (
              !blocker &&
              !possibleStartsSetVirtical.has(JSON.stringify([x, y])) &&
              !possibleStartsSetHorizontal.has(JSON.stringify([x, y]))
            ) {
              possibleStartsSetVirtical.add(JSON.stringify([x, y]));
              possibleStartsArrayVirtical.push([x, y]);
            }
          }
        }
      }

      const randomFloat = Math.random(0, 1);
      const randomChoice = Math.round(randomFloat);

      let shipStart = {};
      let shipEnd = {};

      if (randomChoice) {
        const temp =
          possibleStartsArrayVirtical[
            getRandomInt(0, possibleStartsArrayVirtical.length - 1)
          ];
        shipStart = { x: temp[0], y: temp[1] };
        shipEnd = { x: temp[0], y: temp[1] + ship.getLength() - 1 }; //This might need to be length - 1
      } else {
        const temp =
          possibleStartsArrayHorizontal[
            getRandomInt(0, possibleStartsArrayHorizontal.length - 1)
          ];
        shipStart = { x: temp[0], y: temp[1] };
        shipEnd = { x: temp[0] + ship.getLength() - 1, y: temp[1] }; //This might need to be length - 1
      }

      ship.placeShip(shipStart, shipEnd);
    });
  };

  if (type == "computer") {
    autoPlaceShips();
  }

  return {
    name: name,
    type: type,
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    patrol: patrol,
    ships: ships,
    autoPlaceShips: autoPlaceShips,
  };
}

function takenSpots(ships) {
  let spotsTaken = new Set();
  ships.forEach((ship) => {
    ship.getHits().forEach((hit) => {
      if (hit.x && hit.y) {
        spotsTaken.add(JSON.stringify([hit.x, hit.y]));
      }
    });
  });
  return spotsTaken;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default createPlayer;
