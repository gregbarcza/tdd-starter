var test = require('tape');

const GameOfLife = require('../index')

test('should initialize empty instance', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.ok(gol.state)
  t.end()
});

// state includes an array of living coordinates
test('state should be an array', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.ok(Array.isArray(gol.state));
  t.end()
});

test('state should handle x=0,y=0', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.deepEqual(gol.state, [{ x: 0, y: 0 }]);
  t.end()
});

test('it should have a tick method', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.deepEqual(typeof gol.tick, 'function');
  t.end()
});

test('tick should handle x=0, y=0', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  gol.tick()
  t.deepEqual(gol.state, []);
  t.end()
});

// a cell with less than two neighbors will die
// 1 1
// 1 0
test('tick should handle x=1, y=1', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }])
  gol.tick()
  t.deepEqual(gol.state, [{ x: 0, y: 0 }]);
  t.end()
});

// Easiest still life
// 1 1
// 1 1
test('tick should handle x=1, y=1', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }])
  gol.tick()
  t.deepEqual(gol.state, [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }]);
  t.end()
});
