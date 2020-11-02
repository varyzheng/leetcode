export const threeSum = (nums) => {
  const result = [];
  if (!Array.isArray(nums) || nums.length < 3) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let first = 0; first < nums.length - 2; first += 1) {
    if (nums[first] > 0) {
      break;
    }
    if (first > 0 && nums[first] === nums[first - 1]) {
      // eslint-disable-next-line
      continue;
    }
    let start = first + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[first] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[first], nums[start], nums[end]]);
        while (nums[start] === nums[start + 1]) {
          start += 1;
        }
        start += 1;
      } else if (sum > 0) {
        end -= 1;
      } else {
        start += 1;
      }
    }
  }
  return result;
};
