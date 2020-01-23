var test = require('tape');

const GameOfLife = require('./index')

test('should initialize empty instance', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.ok(gol.state)
  t.end()
});

test('it should have a property `state` which is an array', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])

  t.ok(Array.isArray(gol.state));

  t.end()
});

test('state should be equals to the initial values', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.deepEquals(gol.state, [{ x: 0, y: 0 }]);
  t.end()
});

test('it should have a property `tick` which is a function', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])

  t.ok(typeof gol.tick === 'function');

  t.end()
});

test('a single cell should die after the first tick', function (t) {
  // arrange
  const gol = new GameOfLife([{ x: 0, y: 0 }])

  // act
  gol.tick()

  // assert
  t.deepEquals(gol.state, []);

  // cleanup
  t.end()
});

// any live cell with fewer than two live neighbours dies, as if by underpopulation.
test('a cell with less than 2 neighbors dies', function (t) {
  // arrange
  // 1 1 1
  // 0 0 0
  const initialState = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
  ];
  // 0 1 0
  // 0 1 0
  // 0 1 0
  const expectedFinalState = [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ];

  const gol = new GameOfLife(initialState)
  // act
  gol.tick()
  // assert
  t.deepEquals(gol.state, expectedFinalState);
  // cleanup
  t.end()
});

/**
test('human language', function (t) {
  // arrange
  const initialState = [

  ];

  const expectedFinalState = [

  ];

  const gol = new GameOfLife(initialState)
  // act
  gol.tick()
  // assert
  t.deepEquals(gol.state, expectedFinalState);
  // cleanup
  t.end()
});
*/