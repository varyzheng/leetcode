const checkValue = (result, root, target) => {
  const diff = Math.abs(root.val - target);
  if (result[1] > diff) {
    result[0] = root.val;
    result[1] = diff;
  }
  if (root.val < target) {
    root = root.right;
  } else {
    root = root.left;
  }
  if (root.left || root.right) {
    checkValue(result, root, target);
  }
};

export const closestValue = (root, target) => {
  const result = [0, Infinity];
  checkValue(result, root, target);
  return result[0];
};
