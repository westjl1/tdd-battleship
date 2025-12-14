import createPlayer from "./player";

describe("Player object testing", () => {
  player1 = createPlayer("Player 1");
  test("Does objec have correct name", () => {
    expect(player1.name).toEqual("Player 1");
  });

  test("Place player1 battleship", () => {
    player1.battleship.placeShip({ x: 1, y: 2 }, { x: 1, y: 5 });
    expect(player1.battleship.getHits()).toEqual([
      { x: 1, y: 2, isHit: false },
      { x: 1, y: 3, isHit: false },
      { x: 1, y: 4, isHit: false },
      { x: 1, y: 5, isHit: false },
    ]);
  });
});
