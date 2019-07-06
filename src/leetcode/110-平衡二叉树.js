const getFloor = (node) => {
  if (!node) {
    return 0;
  }
  return Math.max(getFloor(node.left) + 1, getFloor(node.right) + 1);
};

const checkNode = (node) => {
  if (!node) {
    return true;
  }
  const left = getFloor(node.left);
  const right = getFloor(node.right);
  if (Math.abs(left - right) > 1) {
    return false;
  }
  return checkNode(node.left) && checkNode(node.right);
};

export const isBalanced = (root) => {
  if (!root) {
    return true;
  }
  return checkNode(root);
};
