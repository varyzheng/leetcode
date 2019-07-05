export const simplifyPath = (path) => {
  let arr = path.split('');
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === '/' && arr[i - 1] === '/') {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  arr = arr.join('').split('/');
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (val && val !== '.') {
      if (val === '..') {
        result.pop();
      } else {
        result.push(val);
      }
    }
  }
  return `/${result.join('/')}`;
};
