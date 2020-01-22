module.exports = class GameOfLife {
  constructor(initialState) {

    this.state = initialState;
  }

  tick() {
    // if (this.state.length < 2) {
    //   this.state = [];
    // }

    const newState = []
    this.state.forEach((element) => {
      // above - x same, y - 1
      const hasNeighborAbove =
        !!this.state.find((el) => (el.x === element.x) && (el.y === element.y - 1))
      // below - x same, y + 1
      const hasNeighborBelow =
        !!this.state.find((el) => (el.x === element.x) && (el.y === element.y + 1))
      // left - x -1 , y same
      const hasNeighborLeft =
        !!this.state.find((el) => (el.x === element.x - 1) && (el.y === element.y))
      // right- x +1, y same
      const hasNeighborRight =
        !!this.state.find((el) => (el.x === element.x + 1) && (el.y === element.y))

      let qtyOfNeighbors = 0;
      if (hasNeighborAbove) {
        qtyOfNeighbors += 1;
      }
      if (hasNeighborBelow) {
        qtyOfNeighbors += 1;
      }
      if (hasNeighborLeft) {
        qtyOfNeighbors += 1;
      }
      if (hasNeighborRight) {
        qtyOfNeighbors += 1;
      }

      if (qtyOfNeighbors === 2) {
        newState.push(element);
      } else {
        // don't
      }
    });

    this.state = newState;

  }

}