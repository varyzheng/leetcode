export const multiply = (num1, num2) => {
  console.log(num1, num2);
  const result = '0';
  if (num1.length - num2.length < 0) {
    [num1, num2] = [num2, num1];
  }
  for (let i = num1.length - 1; i < num1.length; i -= 1) {
    const arr = [0];
    for (let j = num2.length - 1; j < num2.length; j -= 1) {
      const a = num1[i];
      const b = num2[j];
      const value = (a * b) + arr[0];
      arr[0] = value % 10;
      arr.unshift(Math.floor(value / 10));
    }
    for (let count = 0; count < num1.length - 1 - i; count += 1) {
      arr.push(0);
    }
  }
  return result.join('');
};
