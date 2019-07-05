const getResult = (map, i, j) => {
  if (i === 1 || j === 1) {
    return 1;
  }
  return map[`${i - 1}-${j}`] + map[`${i}-${j - 1}`];
};

export const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) {
    return 1;
  }
  const map = {};
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const value = getResult(map, i, j);
      map[`${i}-${j}`] = value;
    }
  }
  console.log(map);
  return map[`${m}-${n}`];
};
