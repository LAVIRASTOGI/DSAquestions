/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length; // rows
  let n = grid[0].length; //column

  // first add all rotten in queue
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxMin = 0;
  //mark adj nodes as rotten and push in queue till its not empty

  while (queue.length) {
    let [x, y, min] = queue.shift();
    //left
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, min + 1]);
    }
    //right
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, min + 1]);
    }
    //bottom
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, min + 1]);
    }
    //top
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, min + 1]);
    }

    maxMin = Math.max(min, maxMin);
  }

  // finally run over each element and chcek if fresh is remaininag
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMin;
};
