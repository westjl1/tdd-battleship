import ships from "./ships.json"; //with { type: 'json' };

function createShip(type) {
  const ship = {
    type: ships[type].type,
    length: ships[type].length,
    hits: Array.from({ length: ships[type].length }, () => {
      return {
        x: null,
        y: null,
        isHit: false,
      };
    }),
  };

  const placeShip = (start, end) => {
    let shipPlacement = [];
    if (start.x == end.x) {
      //Ship is verticle
      for (let i = start.y; i <= end.y; i++) {
        shipPlacement.push({
          x: start.x,
          y: i,
          isHit: false,
        });
      }
    } else {
      //Ship is horizontal
      for (let i = start.x; i <= end.x; i++) {
        shipPlacement.push({
          x: i,
          y: start.y,
          isHit: false,
        });
      }
    }
    ship.hits = shipPlacement;
  };

  const takeHit = (x, y) => {
    ship.hits.forEach((hit) => {
      if (hit.x === x && hit.y === y) {
        hit.isHit = true;
      }
    });
  };

  const isSunk = () => {
    const hitsLeft =
      ship.length - ship.hits.filter((hit) => hit.isHit === true).length;

    return hitsLeft ? false : true;
  };

  const getType = () => {
    return ship.type;
  };
  const getLength = () => {
    return ship.length;
  };
  const getHits = () => {
    return ship.hits;
  };

  return {
    getType,
    getLength,
    getHits,
    isSunk,
    placeShip,
    takeHit,
  };
}

export default createShip;
