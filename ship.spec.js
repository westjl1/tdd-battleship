import createShip from "./ship";

describe("Ship object testing", () => {
  const testShip = createShip("battleship");
  const testShip2 = createShip("patrol");

  test("Does objec have type", () => {
    expect(testShip.getType()).toEqual(expect.any(String));
  });
  test("Does objec have length", () => {
    expect(testShip.getLength()).toBeGreaterThan(0);
  });
  test("Does objec have hits array", () => {
    expect(testShip.getHits()).toEqual(expect.any(Array));
  });
  test("Does isSunk work", () => {
    expect(testShip.isSunk()).toBe(false);
  });

  test("Place battleship ship", () => {
    testShip.placeShip({ x: 1, y: 2 }, { x: 4, y: 2 });
    expect(testShip.getHits()).toEqual([
      { x: 1, y: 2, isHit: false },
      { x: 2, y: 2, isHit: false },
      { x: 3, y: 2, isHit: false },
      { x: 4, y: 2, isHit: false },
    ]);
  });

  test("Place patrol ship", () => {
    testShip2.placeShip({ x: 5, y: 2 }, { x: 5, y: 3 });
    expect(testShip2.getHits()).toEqual([
      { x: 5, y: 2, isHit: false },
      { x: 5, y: 3, isHit: false },
    ]);
  });

  test("Hit battleship ship", () => {
    testShip.takeHit(3, 2);
    expect(testShip.getHits()).toEqual([
      { x: 1, y: 2, isHit: false },
      { x: 2, y: 2, isHit: false },
      { x: 3, y: 2, isHit: true },
      { x: 4, y: 2, isHit: false },
    ]);
  });
  test("Double check isSunk", () => {
    expect(testShip.isSunk()).toBe(false);
  });

  test("Sink patrol ship", () => {
    testShip2.takeHit(5, 2);
    testShip2.takeHit(5, 3);
    expect(testShip2.isSunk()).toBe(true);
  });
});
