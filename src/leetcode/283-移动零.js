const moveZeroes = (nums) => {
  for (let start = 0, end = nums.length - 1; start < end; start += 1) {
    const num = nums[start]
    if (num === 0) {
      nums.push(num);
      nums.splice(start, 1);
      start -= 1;
      end -= 1;
    }
  }
};
