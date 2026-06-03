function orangesRotting(grid) {
  // add all in a queues rotten otagnges

  // Write your code here
  let row = grid.length;
  let column = grid[0].length;
  let queue = [];
  let fresh = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else {
        if (grid[i][j] === 1) {
          fresh++;
        }
      }
    }
  }
  console.log(fresh);

  if (fresh === 0) return 0;

  let minutes = 0;

  const directions = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, 1], // right
    [0, -1], //left
  ];

  while (queue.length && fresh > 0) {
    let size = queue.length; // important

    for (let i = 0; i < size; i++) {
  
      let [r, c] = queue.shift();

      for (let [dr, dc] of directions) {
        let newRow = dr + r;
        let newcolumn = dc + c;
        if (
          newRow >= 0 &&
          newRow < row &&
          newcolumn >= 0 &&
          newcolumn < column &&
          grid[newRow][newcolumn] === 1
        ) {
          grid[newRow][newcolumn] = 2;
          fresh--;
          queue.push([newRow, newcolumn]);
        }
      }
    }

    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}

module.exports = orangesRotting;

// Example usage
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ]),
);
