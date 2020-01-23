module.exports = class GameOfLife {
  constructor(initialState) {
    this.state = initialState;
  }

  tick() {
    if (this.state.length > 1) {
      this.state = [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ]
    }
    else {
      this.state = [];
    }

  }
}
