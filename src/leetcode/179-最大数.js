export const largestNumber = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i += 1) {
    arr.push(String(nums[i]));
  }
  arr.sort((a, b) => (b + a) - (a + b));
  const result = arr.join('');
  if (Number(result) === 0) {
    return '0';
  }
  return arr.join('');
};
