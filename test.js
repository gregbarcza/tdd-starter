var test = require('tape');

const GameOfLife = require('./index')

test('should initialize empty instance', function (t) {
  const gol = new GameOfLife([{ x: 0, y: 0 }])
  t.ok(gol.state)
  t.end()
});
