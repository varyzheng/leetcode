export const myAtoi = (str) => {
  str = str.trim();
  if (str[0] !== '+' && str[0] !== '-' && isNaN(Number(str[0]))) {
    return 0;
  }
  let flag = false;
  if (str[0] === '+' || str[0] === '-') {
    flag = str[0] === '-';
    str = str.substring(1);
  }
  if (isNaN(Number(str[0])) || str[0] === ' ') {
    return 0;
  }
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (isNaN(Number(str[i])) || str[i] === ' ') {
      break;
    } else {
      result += str[i];
    }
  }
  result = Number(result);
  if (isNaN(result)) {
    return 0;
  }
  if (flag) {
    result = -result;
  }
  if (result > (2 ** 31) - 1) {
    result = (2 ** 31) - 1;
  }
  if (result < -1 * (2 ** 31)) {
    result = -1 * (2 ** 31);
  }
  return result;
};
