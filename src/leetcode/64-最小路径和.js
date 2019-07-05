const getResult = (grid, i, j) => {
  if (i === grid[0].length - 1 && j === grid.length - 1) {
    return grid[j][i];
  }
  let bottom = 0;
  let right = 0;
  if (i === grid[0].length - 1) {
    right = Infinity;
  } else {
    right = grid[j][i + 1];
  }
  if (j === grid.length - 1) {
    bottom = Infinity;
  } else {
    bottom = grid[j + 1][i];
  }
  return Math.min(right, bottom) + grid[j][i];
};

export const minPathSum = (grid) => {
  if (grid.length === 0) {
    return 0;
  }
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const value = getResult(grid, m - 1 - i, n - 1 - j);
      grid[n - 1 - j][m - 1 - i] = value;
    }
  }
  return grid[0][0];
};
