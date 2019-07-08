const getCharByCode = (num) => {
  if (num === 0) {
    return 'Z';
  }
  return String.fromCharCode(num + 64);
}
export const convertToTitle = (n) => {
  let result = '', pow = 1;
  while (n) {
    const mod = n % 26;
    result = getCharByCode(mod) + result;
    n = Math.floor(n / (26 ** pow))
    if (mod === 0) {
      n -= 1;
    }
  }
  return result;
};
