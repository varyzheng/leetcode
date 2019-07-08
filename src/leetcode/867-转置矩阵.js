export const transpose = (arr) => {
  const count = arr.length;
  const length = arr[0].length;
  const newArray = []
  for (let i = 0; i < length; i++) {
    const temp = new Array(count);
    for (let j = 0; j < count; j++) {
      temp[j] = arr[j][i];
    }
    newArray.push(temp);
  }
  return newArray;
};
